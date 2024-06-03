import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IChef } from '../interface/chef.interface';



@Injectable({
    providedIn: 'root'
})
export class DishService {
    private apiUrl = 'http://localhost:3000/api' + '/dish';
   
    constructor(private http: HttpClient) { }

    getAllDishes(): Observable<IChef[]> {
        return this.http.get<IChef[]>(this.apiUrl);
    }



    updateDishById(restaurantData: IChef): Observable<IChef> {
        const url = `${this.apiUrl}/${restaurantData._id}`;
        return this.http.put<IChef>(url, restaurantData);
    }

    deleteDishById(restaurantData: IChef): Observable<IChef> {
        const url = `${this.apiUrl}/${restaurantData._id}`;
        return this.http.delete<IChef>(url, restaurantData);
    }

    addNewDish(restaurantData: IChef): Observable<IChef> {
        return this.http.post<IChef>(this.apiUrl, restaurantData);
    }
}