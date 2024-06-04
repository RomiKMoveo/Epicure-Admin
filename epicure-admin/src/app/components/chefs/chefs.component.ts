
import { Component } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { IChef } from '../../interface/chef.interface';
import { ChefService } from '../../service/chef.service';
import { ChefsTableDataSource } from './chefs-datasource';
import { Router } from '@angular/router';



@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrl: './chefs.component.scss'
})
export class ChefsComponent {
  pageTitle: string = "Chef";
  chefs: IChef[] = [];
  columns: string[] = ['_id', 'title', 'image', 'description', 'restaurants', 'chefOfTheWeek', 'actions'];
  columnDefs = {
    _id: 'ID',
    title: 'Title',
    image: 'Image',
    description: 'Description',
    restaurants: 'Restaurants',
    chefOfTheWeek: 'ChefOfTheWeek',
    actions: 'Actions'
  };

  dataLoaded: boolean = false;
  
  constructor(private chefService: ChefService
  ) { }

  ngOnInit(): void {
    this.chefService.getAllChefs().subscribe((data: IChef[]) => {
      this.chefs = data;
      console.log(this.chefs);
      this.dataLoaded = true;
    });

  }
  addChef(restaurant: IChef) {
    // if (restaurant._id === "") {
      //this.chefService.(restaurant).subscribe((newRestaurant) => {
        //this.restaurants.push(newRestaurant);
        //this.updateTableData();
      //});
    // } else {
    //   this.restaurantsService.updateRestaurant(restaurant._id, restaurant).subscribe(() => {
    //     const index = this.restaurants.findIndex(r => r._id === restaurant._id);
    //     if (index !== -1) {
    //       this.restaurants[index] = restaurant;
    //       this.updateTableData();
    //     }
    //   });
    // }
    // this.showModal = false;
  }

  deleteChef(restaurant: IChef) {
    // this.chefService.deleteRestaurant(restaurant._id).subscribe(() => {
    //   this.restaurants = this.restaurants.filter(r => r._id !== restaurant._id);
    //   this.updateTableData();
    //   this.showDeleteModal = false;
    // });
  }

  updateTableData() {
    // This will trigger the data update in the generic table
    this.chefs = [...this.chefs];
  }

}