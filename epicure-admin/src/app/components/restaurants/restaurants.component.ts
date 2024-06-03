import { Component, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';

import { IRestaurant } from '../../interface/restaurant.interface';
import { RestaurantsService } from '../../service/restaurant.service';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.scss'
})
export class RestaurantsComponent {
  private restaurants: IRestaurant[] = [];
  
  
}