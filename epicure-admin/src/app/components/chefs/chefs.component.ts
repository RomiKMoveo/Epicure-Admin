
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { IChef } from '../../interface/chef.interface';
import { ChefService } from '../../service/chef.service';
import { columnDefs, columnTypes, columns, columnDropdown } from '../../constants/chefData';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrl: './chefs.component.scss'
})
export class ChefsComponent {
  isLoading!: Observable<boolean>;
  pageTitle: string = "Chef";
  chefs: IChef[] = [];
  columns: string[] = columns;
  columnDefs = columnDefs;
  columnTypes = columnTypes;
  columnDropdown = columnDropdown;
  
  constructor(private chefService: ChefService) {}

  ngOnInit(): void {
    this.isLoading = this.chefService.getIsLoading();
    this.chefService.featchAllChefs();
    this.chefService.getAllChefs().subscribe((response) => {
      this.chefs = response;
    });
  }
}