import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { IUser } from '../../interface/user.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  loginForm: FormGroup;
  userToken: string = '';

  constructor( private fb: FormBuilder, private authService: AuthService , private router: Router ) {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      });
  }

  async login() {
    if (this.loginForm.invalid) {
      alert('Invalid input')
      return;
    }
    await this.authService.authenticateUser(this.loginForm.value);
    if (localStorage.getItem('token')) {
      this.router.navigate(['/']);
    }
    else {
      alert("Please check if email or passowrd is correct.");
    }
      

      
  }
  
}