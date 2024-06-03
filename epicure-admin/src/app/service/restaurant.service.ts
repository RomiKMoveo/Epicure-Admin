import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRestaurant } from '../interface/restaurant.interface';


@Injectable({
    providedIn: 'root'
})
export class RestaurantsService {
    private apiUrl = 'http://localhost:3000/api' + '/restaurant';
   
    restaurantsUpdateEvent = new EventEmitter<IRestaurant[]>();

    restaurants: IRestaurant[] = [];
    constructor(private http: HttpClient) {
        this.fetchRestaurants();
    }

    fetchRestaurants() {
        //need to check why using API_URL.chefs not working
        this.http.get(this.apiUrl).subscribe((restaurants) => {
            console.log("Restaurants", restaurants)
            //this.restaurants = restaurants;
            // this.restaurantsUpdateEvent.emit(restaurants);
        })
    }

    // updateRestaurant(restaurant: IRestaurant) {
    //     //need to check why using API_URL.chefs not working
    //     this.http.put(`http://127.0.0.1:3000/restaurants/${restaurant._id}`, restaurant).subscribe((responseRestaurant: IRestaurant) => {
    //         console.log("response put restaurant", responseRestaurant);
    //         this.fetchRestaurants();
    //     })
    // }

    // postRestaurant(restaurant: IRestaurant) {
    //     //need to check why using API_URL.chefs not working
    //     this.http.post('http://127.0.0.1:3000/restaurants', restaurant).subscribe((responseRestaurant: IRestaurant) => {
    //         console.log("response post restaurant", responseRestaurant);
    //         this.fetchRestaurants();
    //     })
    // }
}