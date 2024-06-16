import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  
  constructor(private router: Router,
    private authService: AuthService
  ) { }

  navToDishTable(): void {
    this.router.navigate(['/dishes']);
  }
  navToChefTable(): void {
    this.router.navigate(['/chefs']);
  }
  navToRestaurantTable(): void {
    this.router.navigate(['/restaurants']);
  }

  
  logout() {
    this.authService.logout();
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
