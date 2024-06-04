import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IChef } from '../interface/chef.interface';
import { IRestaurant } from '../interface/restaurant.interface';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ChefService {
    constructor(private http: HttpClient) {}

    getAllChefs(): Observable<IChef[]> {
        return this.http.get<IChef[]>(`${environment.baseURL}/chef`,);
      }
    
}

