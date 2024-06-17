import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RestaurantService } from '../../service/restaurant.service';
import { ChefService } from '../../service/chef.service';
import { DishService } from '../../service/dish.service';
import { GenericDialogComponen } from '../../generic-dialog/generic-dialog.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements OnInit {
  @Input() pageTitle: string = '';
  @Input() data: any[] = [];
  @Input() columns: string[] = [];
  @Input() columnDefs: { [key: string]: string } = {};
  @Input() columnTypes: { [key: string]: string } = {};
  @Input() columnDropdown = {};

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource(this.data);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  editingElementId: string | null = null;
  editedData: any = {};

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private restaurantService: RestaurantService,
    private chefService: ChefService,
    private dishService: DishService
  ) {}
  
  ngOnInit() {
    this.displayedColumns = this.columns;
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  formatId(id: string): string {
    return `${id.substring(0, 5)}****...`;
  }

  getElementVal(element: any, column: any) {
    let str: string = '';
    switch (column) {
      case 'dishes':
        return this.getValuesFromElemArr(element.dishes, column);
      case 'chef':
        return element.chef?.title || 'No chef info';
      case 'restaurant':
        return element.restaurant?.title || 'No restaurant info';
      case 'restaurants':
        return this.getValuesFromElemArr(element.restaurants, column);
      case 'isPopular':
        return element[column];
      case 'chefOfTheWeek':
        return element[column];
      case 'isSignature':
      return element[column];
      default:
        return element[column] || 'No data';
    }
  }
  
  getValuesFromElemArr(element: any, column: string): string {
    let str: string = '';
    for (let index = 0; index < element.length; index++) {
      str += element[index].title + ', ';
    }
    str = str.slice(0, -2);
    return str === '' ? 'No ' + column + ' info' : str;
  }

  edit(element: any) {
    this.editingElementId = element._id;
    this.editedData = { ...element };

    const dialogRef = this.dialog.open(GenericDialogComponen, {
      width: '500px',
      data: {
        editRow: true,
        columns: this.columns,
        columnDefs: this.columnDefs,
        pageTitle: this.pageTitle,
        columnTypes: this.columnTypes,
        columnDropdown: this.columnDropdown,
        editingElementId: this.editingElementId,
        editedData: this.editedData
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.saveEdit(result, this.editedData._id);

      }
    });
  }

  async saveEdit(updatedData: any, elementID: string) {
    console.log(elementID);
    
    try {
      switch (this.pageTitle) {
        case 'Restaurant':
          await this.restaurantService.updateRestaurant(elementID, updatedData);
          await this.restaurantService.featchAllRestuarants();
          break;
        case 'Chef':
          await this.chefService.updateChef(elementID, updatedData);
          break;
        case 'Dish':
          await this.dishService.updateDish(elementID, updatedData);
          break;
      }
      const index = this.data.findIndex(item => item._id === elementID);
      if (index !== -1) {
        this.data[index] = updatedData;
        this.dataSource.data = [...this.data];
      }
      this.cancelEdit();
    } catch (error) {
      console.error('Error updating the item:', error);
    }
  }

  cancelEdit() {
    this.editingElementId = null;
    this.editedData = {};
  }

  async delete(elementID: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        try {
          switch (this.pageTitle) {
            case 'Restaurant':
              await this.restaurantService.deleteRestaurant(elementID);
              break;
            case 'Chef':
              await this.chefService.deleteChef(elementID);
              break;
            case 'Dish':
              await this.dishService.deleteDish(elementID);
              break;
          }
          this.data = this.data.filter(r => r._id !== elementID);
          this.dataSource.data = [...this.data];
        } catch (error) {
          console.error('Error deleting the item:', error);
        }
      }
    });
  }
  
  add() {
    const dialogRef = this.dialog.open(GenericDialogComponen, {
      width: '500px',
      data: {
        editRow: false,
        columns: this.columns,
        columnDefs: this.columnDefs,
        pageTitle: this.pageTitle,
        columnTypes: this.columnTypes,
        columnDropdown: this.columnDropdown
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.data.push(result);
        this.dataSource.data = [...this.data];
      }
    });
  }

  returnToHomePage(): void {
    this.router.navigate(['../']);
  }
}
