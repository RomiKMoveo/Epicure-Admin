import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  
  constructor(private router: Router) { }

  navToDishTable(): void {
    this.router.navigate(['/dishes']);
  }
  navToChefTable(): void {
    this.router.navigate(['/chefs']);
  }
  navToRestaurantTable(): void {
    this.router.navigate(['/restaurants']);
  }

}
