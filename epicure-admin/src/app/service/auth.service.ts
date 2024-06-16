import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { IUser } from '../interface/user.interface';
import { environment } from '../../environments/environment';

export default interface IHandlerResults {
  success?: any;
  error?: Error;
  code?: number;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  async authenticateUser(credentials: {
    email: string;
    password: string;
  }) {
    const { email, password } = credentials;
    try {
      const loginUser = await firstValueFrom(
        this.http.post<IUser>( `${environment.baseURL}/userAuth/login/`, { email, password }));
        
        console.log(loginUser.token);
        
        if(loginUser.token !== '') {
          localStorage.removeItem("token");
          localStorage.setItem("token", loginUser.token);
      }

    } catch (error) {

    }
  }

  logout() {
    
  }

}

  