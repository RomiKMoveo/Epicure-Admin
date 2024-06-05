import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IRestaurant } from '../../interface/restaurant.interface';
import { RestaurantService } from '../../service/restaurant.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit, OnChanges {
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

  isLoading!: Observable<boolean>;
  showModal: boolean = false;
  showDeleteModal: boolean = false;


  constructor( private restaurantsService: RestaurantService ) { }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.isLoading = this.restaurantsService.getIsLoading();
    this.restaurantsService.featchAllRestuarants();
    this.restaurantsService.getAllRestaurants().subscribe((response) => {
      this.restaurants = response;
    });
  }
  // addRestaurant(restaurant: IRestaurant) {
  //   if (restaurant._id === "") {
  //     this.restaurantsService.addRestaurant(restaurant).subscribe((newRestaurant) => {
  //       //this.restaurants.push(newRestaurant);
  //       this.updateTableData();
  //     });
  //   } else {
  //     this.restaurantsService.updateRestaurant(restaurant._id, restaurant).subscribe(() => {
  //       const index = this.restaurants.findIndex(r => r._id === restaurant._id);
  //       if (index !== -1) {
  //         this.restaurants[index] = restaurant;
  //         this.updateTableData();
  //       }
  //     });
  //   }
  //   this.showModal = false;
  // }

}
