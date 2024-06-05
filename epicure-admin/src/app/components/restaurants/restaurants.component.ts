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
  
}
