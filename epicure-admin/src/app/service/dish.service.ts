import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IChef } from '../interface/chef.interface';
import { IDish } from '../interface/dish.interface';
import { environment } from '../../environments/environment';



@Injectable({
    providedIn: 'root'
})
export class DishService {
    constructor(private http: HttpClient) { }

    getAllDishes(){
        return this.http.get<IDish[]>(`${environment.baseURL}/dish`);
    }


}