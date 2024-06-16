import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { DishesComponent } from './components/dishes/dishes.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuard } from './authentication/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'dishes', component: DishesComponent, canActivate: [AuthGuard] },
  { path: 'restaurants', component: RestaurantsComponent, canActivate: [AuthGuard] },
  { path: 'chefs', component: ChefsComponent, canActivate: [AuthGuard] },
  //{ path: '**', redirectTo: '' } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }