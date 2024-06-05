import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRestaurant } from '../interface/restaurant.interface';
import { environment } from '../../environments/environment';
import { BehaviorSubject, firstValueFrom } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class RestaurantService {
  private restaurants = new BehaviorSubject<IRestaurant[]>([]);
  private isloading = new BehaviorSubject<boolean>(false);
  
  constructor(private http: HttpClient) {}

  private setRestaurants(restaurants: any) {
    this.restaurants.next(restaurants);
  }

  getAllRestaurants() {
    //return this.http.get<IRestaurant[]>(`${environment.baseURL}/restaurant`);
    return this.restaurants;
  }
 
  
  getIsLoading() {
    return this.isloading.asObservable();
  }

  async featchAllRestuarants() {
    this.isloading.next(false);
    try {
      const result = await firstValueFrom(
        this.http.get<{ restaurants: IRestaurant[] }>(
          `${environment.baseURL}/restaurant`
        )
      );
      this.setRestaurants(result);  
      console.log(result);
          
      this.isloading.next(true);
    } catch (error) {
      this.isloading.next(false);
      console.log(error);
    }
  }

  addRestaurant(obj: any) {
    console.log(obj);
    return this.http.post(
      `${environment.baseURL}/restaurant`,
      obj
    );
  }

  // updateRestaurant(id: string, obj: any) {
  //   console.log(id, obj);
  //   return this.http.put(
  //     `${environment.baseURL}/restaurant/${id}`,
  //     obj
  //   );
  // }

  async deleteRestaurant(id: string) {
    try {
      await firstValueFrom(
        this.http.delete(`${environment.baseURL}/restaurant/${id}`)
      );
      alert('Chef has been successfully deleted');
      this.featchAllRestuarants();
    } catch (error) {
      console.log(error);
    }
  }

  async updateRestaurant(id: string, restaurant: IRestaurant) {
    try {
      const updatedRestaurant = await firstValueFrom(
        this.http.put<IRestaurant>(`${environment.baseURL}/restaurant/${id}`, restaurant)
      );

      if (updatedRestaurant) {
        alert('Restaurant has been successfully updated');
        this.featchAllRestuarants();
      }
    } catch (error) {
      console.log(error);
    }
  }

  
}