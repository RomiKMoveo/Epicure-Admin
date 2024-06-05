import { Component } from '@angular/core';
import { IDish } from '../../interface/dish.interface';
import { DishService } from '../../service/dish.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrl: './dishes.component.scss'
})
export class DishesComponent {
  pageTitle: string = "Dishe";
  dishes: IDish[] = [];
  columns: string[] = ['_id', 'title', 'image', 'price', 'ingredients', 'tag', 'isSignature', 'restaurant', 'actions'];
  columnDefs = {
    _id: 'ID',
    title: 'Title',
    image: 'Image',
    price: 'Price',
    ingredients: 'Ingredients',
    tag: 'Tag',
    isSignature: 'IsSignature',
    restaurant: 'Restaurant',
    actions: 'Actions'
  };

  isLoading!: Observable<boolean>;
  showModal: boolean = false;
  showDeleteModal: boolean = false;

  constructor( private dishService: DishService ) { }

  ngOnInit(): void {
    this.isLoading = this.dishService.getIsLoading();
    this.dishService.featchAllDishes();
    this.dishService.getAllDishes().subscribe((response) => {
      this.dishes = response;
    });
  }
  
}
