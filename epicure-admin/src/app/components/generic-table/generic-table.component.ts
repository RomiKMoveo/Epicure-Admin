import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

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
  
  constructor(private router: Router) {}
  ngOnInit() {
    this.displayedColumns = this.columns;
    console.log('pageTitle', this.pageTitle);
    console.log('Columns:', this.columns);
    console.log('ColumnDefs:', this.columnDefs);
    console.log('Data:', this.data);
  }
  
  getElementVal(element: any, column: any) {
      if (column === 'dishes') {
        let dishesStr: string = '';
        for (let index = 0; index < element.dishes.length; index++) {
          dishesStr = dishesStr + element.dishes[index].title + ' ';
        }
        return dishesStr == ''?  'No dishes info': dishesStr;

      }else if (column === 'chef') {
        return element.chef?.title || 'No chefs info';  
      
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
    // Handle the edit action here
    console.log('Edit', element);
  }

  delete(element: any) {
    // Handle the delete action here
    console.log('Delete', element);
  }
  
  add() {
    // Handle the delete action here
    console.log('Add');
  }
  returnToHomePage(): void {
    this.router.navigate(['../']);
  }
}

