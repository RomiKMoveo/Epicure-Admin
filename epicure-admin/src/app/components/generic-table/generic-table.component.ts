import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GenericDialogComponen } from '../../generic-dialog/generic-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { RestaurantService } from '../../service/restaurant.service';
import { ChefService } from '../../service/chef.service';
import { DishService } from '../../service/dish.service';

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
  }
  
  getElementVal(element: any, column: any) {
      if (column === 'dishes') {
        let dishesStr: string = '';
        for (let index = 0; index < element.dishes.length; index++) {
          dishesStr = dishesStr + element.dishes[index].title + ' ';
        }
        return dishesStr == ''?  'No dishes info': dishesStr;

      }else if (column === 'chef') {
        return element.chef?.title || 'No chef info';  
      
      }else if (column === 'restaurant') {
        return element.restaurant?.title || 'No restaurant info'; 

      }else if (column === 'restaurants') {
        let restaurantsStr: string = '';
        for (let index = 0; index < element.restaurants.length; index++) {
          restaurantsStr = restaurantsStr + element.restaurants[index].title + ' ';
        }
        return restaurantsStr == ''?  'No dishes info': restaurantsStr;

      
      } else {
      return null;
    }
  }

  edit(element: any) {
    this.editingElementId = element._id;
    this.editedData = { ...element };
  }

  cancelEdit() {
    this.editingElementId = null;
    this.editedData = {};
  }

  async submitEdit() {
    switch (this.pageTitle) {
      case 'Restaurant':
        await this.restaurantService.updateRestaurant(this.editedData._id, this.editedData);
        break;
        case 'Chef':
        await this.chefService.updateChef(this.editedData._id, this.editedData);
        break;
      case 'Dish':
        await this.dishService.updateDish(this.editedData._id, this.editedData);
        break;
    }
    const index = this.data.findIndex(item => item._id === this.editedData._id);
    if (index !== -1) {
      this.data[index] = this.editedData;
      this.dataSource.data = [...this.data];
    }
    this.cancelEdit();
  }

  async delete(elementID: string) {
    console.log('Delete', elementID);
    console.log('model', this.pageTitle);

    switch (this.pageTitle) {
      case 'Restaurant':
        console.log('Restaurant deleted');
        await this.restaurantService.deleteRestaurant(elementID);
        break;
      case 'Chef':
        console.log('Chef deleted');
        this.chefService.deleteChef(elementID);
        break;
      case 'Dishe':
        console.log('Dishe deleted');
        this.dishService.deleteDish(elementID);
        break;
    }
    this.data = this.data.filter(r => r._id !== elementID);
    this.dataSource.data = [...this.data];

  }
  
  add() {
    console.log('Add');
    const dialogRef = this.dialog.open(GenericDialogComponen);

  }
  returnToHomePage(): void {
    this.router.navigate(['../']);
  }

  // searchByTitle(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}

