import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { DishesComponent } from './components/dishes/dishes.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';

export const routes: Routes = [
    {
        path: '', component: HomePageComponent
    },
    { path: 'dishes', component: DishesComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'chefs', component: ChefsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }