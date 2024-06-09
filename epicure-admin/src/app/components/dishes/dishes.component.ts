import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { IDish } from '../../interface/dish.interface';
import { DishService } from '../../service/dish.service';
import { columnDefs, columnTypes, columns, columnDropdown} from '../../constants/dishData';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrl: './dishes.component.scss'
})
export class DishesComponent {
  isLoading!: Observable<boolean>;
  pageTitle: string = "Dishe";
  dishes: IDish[] = [];
  columns: string[] = columns;
  columnDefs = columnDefs;
  columnTypes = columnTypes;
  columnDropdown = columnDropdown;

  constructor( private dishService: DishService ) {}

  ngOnInit(): void {
    this.isLoading = this.dishService.getIsLoading();
    this.dishService.featchAllDishes();
    this.dishService.getAllDishes().subscribe((response) => {
      this.dishes = response;
    });
  }
}
