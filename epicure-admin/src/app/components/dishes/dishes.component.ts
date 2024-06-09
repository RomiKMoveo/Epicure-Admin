import { Component } from '@angular/core';
import { IDish } from '../../interface/dish.interface';
import { DishService } from '../../service/dish.service';
import { Observable } from 'rxjs';
import { columnDefs, columnTypes, columns } from '../../constants/dishData';


@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrl: './dishes.component.scss'
})
export class DishesComponent {
  pageTitle: string = "Dishe";
  dishes: IDish[] = [];
  columns: string[] = columns;
  columnDefs = columnDefs;
  columnTypes = columnTypes;

  
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
