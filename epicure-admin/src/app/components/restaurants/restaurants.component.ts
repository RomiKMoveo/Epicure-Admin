import { Component } from '@angular/core';
import { IRestaurant } from '../../interface/restaurant.interface';
import { RestaurantsService } from '../../service/restaurant.service';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.scss'
})
export class RestaurantsComponent {
  restaurants!: IRestaurant[];
  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit(): void {
    this.restaurantsService.restaurantsUpdateEvent.subscribe((restaurants: IRestaurant[]) => {
      this.restaurants = restaurants;
    })
  }

  ngAfterContentInit() {
    this.setRestaurants();
  }

  setRestaurants() {
    this.restaurants = this.restaurantsService.restaurants;
  }

}