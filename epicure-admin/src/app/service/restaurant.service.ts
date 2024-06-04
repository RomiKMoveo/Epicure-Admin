import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRestaurant } from '../interface/restaurant.interface';
import { environment } from '../../environments/environment';



@Injectable({
    providedIn: 'root'
})
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  getAllRestaurants() {
    return this.http.get<IRestaurant[]>(`${environment.baseURL}/restaurant`);
  }

  addRestaurant(obj: any) {
    console.log(obj);
    return this.http.post(
      `${environment.baseURL}/restaurant`,
      obj
    );
  }

  updateRestaurant(id: string, obj: any) {
    console.log(id, obj);
    return this.http.put(
      `${environment.baseURL}/restaurant/${id}`,
      obj
    );
  }

  deleteRestaurant(id: string) {
    console.log(id);
    return this.http.delete(
      `${environment.baseURL}/restaurant/${id}`
    );
  }

  
}