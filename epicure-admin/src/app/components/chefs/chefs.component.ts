
import { Component } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { IChef } from '../../interface/chef.interface';
import { ChefService } from '../../service/chef.service';
import { ChefsTableDataSource } from './chefs-datasource';
import { Router } from '@angular/router';
import { RestaurantsService } from '../../service/restaurant.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-chefs',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './chefs.component.html',
  styleUrl: './chefs.component.scss'
})
export class ChefsComponent {
  displayedColumns: string[] = ['id', 'name', 'restaurants', 'chefOfTheWeek', 'description'];
  dataSource: ChefsTableDataSource;

  constructor(private chefService: ChefService) {
    this.dataSource = new ChefsTableDataSource(this.chefService);
    console.log(this.dataSource)
  }
}