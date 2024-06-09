import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
// import { AlertService } from 'src/app/services/alert.service';
// import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent{
    username: string = '';
    password: string = '';

    constructor ( private authService: AuthService, 
      private router: Router
    ) {
    
    }
    
    login() {
      if (this.authService.login(this.username, this.password)) {
        this.router.navigate(['/']);
      } else {
        alert('Invalid credentials');
      }
  }

} 