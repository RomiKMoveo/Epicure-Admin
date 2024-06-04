import { Component, OnInit } from '@angular/core';
import { IRestaurant } from '../../interface/restaurant.interface';
import { RestaurantsService } from '../../service/restaurant.service';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  pageTitle: string = "Restaurant";
  restaurants: IRestaurant[] = [];
  columns: string[] = ['_id', 'title', 'image', 'stars', 'dishes', 'chef', 'isPopular', 'actions'];
  columnDefs = {
    _id: 'ID',
    title: 'Title',
    image: 'Image',
    stars: 'Stars',
    dishes: 'Dishes',
    chef: 'Chef',
    isPopular: 'Popular',
    actions: 'Actions'
  };

  dataLoaded: boolean = false;

  editMode: string = "add";
  message: string | undefined;
  editRestaurant?: IRestaurant;
  showModal: boolean = false;
  showDeleteModal: boolean = false;
  deletedRestaurantId: string | undefined;


  constructor(private restaurantsService: RestaurantsService
  ) { }

  ngOnInit(): void {
    this.restaurantsService.getAllRestaurants().subscribe((data: IRestaurant[]) => {
      this.restaurants = data;
      console.log(this.restaurants);
      this.dataLoaded = true;
    });

  }
  addRestaurant(restaurant: IRestaurant) {
    if (restaurant._id === "") {
      this.restaurantsService.addRestaurant(restaurant).subscribe((newRestaurant) => {
        //this.restaurants.push(newRestaurant);
        this.updateTableData();
      });
    } else {
      this.restaurantsService.updateRestaurant(restaurant._id, restaurant).subscribe(() => {
        const index = this.restaurants.findIndex(r => r._id === restaurant._id);
        if (index !== -1) {
          this.restaurants[index] = restaurant;
          this.updateTableData();
        }
      });
    }
    this.showModal = false;
  }

  deleteRestaurant(restaurant: IRestaurant) {
    this.restaurantsService.deleteRestaurant(restaurant._id).subscribe(() => {
      this.restaurants = this.restaurants.filter(r => r._id !== restaurant._id);
      this.updateTableData();
      this.showDeleteModal = false;
    });
  }

  updateTableData() {
    // This will trigger the data update in the generic table
    this.restaurants = [...this.restaurants];
  }

}
