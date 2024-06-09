import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IRestaurant } from '../../interface/restaurant.interface';
import { IDish } from '../../interface/dish.interface';
import { IChef } from '../../interface/chef.interface';
import { RestaurantService } from '../../service/restaurant.service';
import { DishService } from '../../service/dish.service';
import { ChefService } from '../../service/chef.service';
import { columnDefs, columnTypes, columns, columnDropdown } from '../../constants/restaurrantData';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  isLoading!: Observable<boolean>;
  pageTitle: string = "Restaurant";
  restaurants: IRestaurant[] = [];
  columns: string[] = columns;
  columnDefs = columnDefs;
  columnTypes = columnTypes;
  columnDropdown = columnDropdown
  dishes: IDish[] = [];
  dishesOptions: { value: string; viewValue: string }[] = [];
  chefs: IChef[] = [];
  chefsOptions: { value: string; viewValue: string }[] = [];

  constructor( private restaurantsService: RestaurantService,
    private dishService: DishService,
    private chefService: ChefService
   ) { }

  async ngOnInit(): Promise<void> {
    this.isLoading = this.restaurantsService.getIsLoading();
    this.restaurantsService.featchAllRestuarants();
    this.restaurantsService.getAllRestaurants().subscribe((response) => {
    this.restaurants = response;
    });
    await this.fetchDishes();
    this.columnDropdown['dishes'] = this.dishesOptions;
    await this.fetchChefs();
    this.columnDropdown['chef'] = this.chefsOptions;
  }

  async fetchDishes() {
      await this.dishService.featchAllDishes();
      this.dishService.getAllDishes().subscribe((response) => {
        this.dishes = response;
        this.dishesOptions = this.dishes.map(dish => ({
          value: dish._id,
          viewValue: dish.title
        }));
      });
    }

  async fetchChefs() {
    await this.chefService.featchAllChefs();
    this.chefService.getAllChefs().subscribe((response) => {
      this.chefs = response;
      this.chefsOptions = this.chefs.map(chef => ({
        value: chef._id,
        viewValue: chef.title
      }));
    }); 
  } 
}
