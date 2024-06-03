import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IChef } from '../interface/chef.interface';



@Injectable({
    providedIn: 'root'
})
export class ChefService {
    private apiUrl = 'http://localhost:3000/api' + '/chef';
   
    constructor(private http: HttpClient) {}

    getAllChefs(): Observable<IChef[]> {
        return this.http.get<IChef[]>(this.apiUrl).pipe(
            map((response: any) =>
                response.results.map((chef: any) => ({
                    title: chef.title,
                    _id: chef._id,
                    image: chef.image,
                    description: chef.description,
                    restaurants: chef.restaurants,
                    chefOfTheWeek: chef.chefOfTheWeek
                  })),
                  console.log(Response),
                ));
        }
}



//     updateChefById(restaurantData: IChef): Observable<IChef> {
//         const url = `${this.apiUrl}/${restaurantData._id}`;
//         return this.http.put<IChef>(url, restaurantData);
//     }

//     deleteChefById(restaurantData: IChef): Observable<IChef> {
//         const url = `${this.apiUrl}/${restaurantData._id}`;
//         return this.http.delete<IChef>(url, restaurantData);
//     }

//     addNewChef(restaurantData: IChef): Observable<IChef> {
//         return this.http.post<IChef>(this.apiUrl, restaurantData);
//     }
// }