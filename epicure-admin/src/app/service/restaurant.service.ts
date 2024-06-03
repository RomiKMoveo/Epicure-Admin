import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRestaurant } from '../interface/restaurant.interface';


@Injectable({
    providedIn: 'root'
})
export class RestaurantsService {
    private apiUrl = 'http://localhost:3000/api' + '/restaurant';
   
    constructor(private http: HttpClient) { }

    getAllRestaurants(): Observable<IRestaurant[]> {
        return this.http.get<IRestaurant[]>(this.apiUrl);
    }

    // getRestaurantsAdmin(): Observable<IRestaurant[]> {
    //     return this.http.get<IRestaurant[]>(this.apiAdminUrl);
    // }

    updateRestaurantById(restaurantData: IRestaurant): Observable<IRestaurant> {
        const url = `${this.apiUrl}/${restaurantData._id}`;
        return this.http.put<IRestaurant>(url, restaurantData);
    }

    deleteRestaurantById(restaurantData: IRestaurant): Observable<IRestaurant> {
        const url = `${this.apiUrl}/${restaurantData._id}`;
        return this.http.delete<IRestaurant>(url, restaurantData);
    }

    addNewRestaurant(restaurantData: IRestaurant): Observable<IRestaurant> {
        return this.http.post<IRestaurant>(this.apiUrl, restaurantData);
    }
}