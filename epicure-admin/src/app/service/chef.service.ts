import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, firstValueFrom, map } from 'rxjs';
import { IChef } from '../interface/chef.interface';
import { IRestaurant } from '../interface/restaurant.interface';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ChefService {
  private chefs = new BehaviorSubject<IChef[]>([]);
  private isloading = new BehaviorSubject<boolean>(false);
    
  constructor(private http: HttpClient) { }

  private setChefs(chefs: any) {
    this.chefs.next(chefs);
  }

  getAllChefs() {
    return this.chefs;
  }
 
  getIsLoading() {
    return this.isloading.asObservable();
  }

  async featchAllChefs() {
    this.isloading.next(false);
    try {
      const result = await firstValueFrom(
        this.http.get<{ restaurants: IChef[] }>(
          `${environment.baseURL}/chef`
        )
      );
      this.setChefs(result);  
          
      this.isloading.next(true);
    } catch (error) {
      this.isloading.next(false);
    }
  }

  addChef(obj: any) {
    return this.http.post(
      `${environment.baseURL}/chef`,
      obj
    );
  }

  async deleteChef(id: string) {
    try {
      await firstValueFrom(
        this.http.delete(`${environment.baseURL}/chef/${id}`)
      );
      alert('Chef has been successfully deleted');
      this.featchAllChefs();
    } catch (error) {
    }
  }

  async updateChef(id: string, chef: IChef) {
    try {
      const updatedChef = await firstValueFrom(
        this.http.put<IChef>(`${environment.baseURL}/chef/${id}`, chef)
      );

      if (updatedChef) {
        alert('Chef has been successfully updated');
        this.featchAllChefs();
      }
    } catch (error) {
    }
  }

  
}
