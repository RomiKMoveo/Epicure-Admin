import { Component } from '@angular/core';
import { IDish } from '../../interface/dish.interface';
import { DishService } from '../../service/dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrl: './dishes.component.scss'
})
export class DishesComponent {
  pageTitle: string = "Dishe";
  dishes: IDish[] = [];
  columns: string[] = ['_id', 'title', 'image', 'price', 'ingredients', 'tag', 'restaurants', 'actions'];
  columnDefs = {
    _id: 'ID',
    title: 'Title',
    image: 'Image',
    price: 'Price',
    ingredients: 'Ingredients',
    tag: 'Tag',
    restaurant: 'Restaurants',
    actions: 'Actions'
  };

  dataLoaded: boolean = false;

  constructor(private dishService: DishService
  ) { }

  ngOnInit(): void {
    this.dishService.getAllDishes().subscribe((data: IDish[]) => {
      this.dishes = data;
      console.log(this.dishes);
      this.dataLoaded = true;
    });

  }
  addChef(restaurant: IDish) {
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

  deleteChef(restaurant: IDish) {
    // this.chefService.deleteRestaurant(restaurant._id).subscribe(() => {
    //   this.restaurants = this.restaurants.filter(r => r._id !== restaurant._id);
    //   this.updateTableData();
    //   this.showDeleteModal = false;
    // });
  }

  updateTableData() {
    // This will trigger the data update in the generic table
    this.dishes = [...this.dishes];
  }


}
