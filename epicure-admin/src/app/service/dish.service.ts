import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { IChef } from '../interface/chef.interface';
import { IDish } from '../interface/dish.interface';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DishService {
  private dishes = new BehaviorSubject<IDish[]>([]);
  private isloading = new BehaviorSubject<boolean>(false);
    
  constructor(private http: HttpClient) { }

  private setDishes(dishes: any) {
    this.dishes.next(dishes);
  }

  getAllDishes() {
    return this.dishes;
  }
 
  getIsLoading() {
    return this.isloading.asObservable();
  }

  async featchAllDishes() {
    this.isloading.next(false);
    try {
      const result = await firstValueFrom(
        this.http.get<{ restaurants: IDish[] }>(
          `${environment.baseURL}/dish`
        )
      );
      this.setDishes(result);  
          
      this.isloading.next(true);
    } catch (error) {
      this.isloading.next(false);
    }
  }

  addDish(dish: IDish) {
    return this.http.post(
      `${environment.baseURL}/dish`, dish );
  }

  async deleteDish(id: string) {
    try {
      await firstValueFrom(
        this.http.delete(`${environment.baseURL}/dish/${id}`)
      );
      alert('Chef has been successfully deleted');
      this.featchAllDishes();
    } catch (error) {
    }
  }

  async updateDish(id: string, dish: IDish) {
    try {
      const updatedDish = await firstValueFrom(
        this.http.put<IDish>(`${environment.baseURL}/dish/${id}`, dish)
      );

      if (updatedDish) {
        alert('Dish has been successfully updated');
        this.featchAllDishes();
      }
    } catch (error) {
    }
  }

  
}