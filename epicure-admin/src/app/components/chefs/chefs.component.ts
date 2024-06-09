
import { Component } from '@angular/core';
import { IChef } from '../../interface/chef.interface';
import { ChefService } from '../../service/chef.service';
import { Observable } from 'rxjs';

import { columnDefs, columnTypes, columns } from '../../constants/chefData';


@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrl: './chefs.component.scss'
})
export class ChefsComponent {
  pageTitle: string = "Chef";
  chefs: IChef[] = [];
  columns: string[] = columns;
  columnDefs = columnDefs;
  columnTypes = columnTypes;

  isLoading!: Observable<boolean>;
  showModal: boolean = false;
  showDeleteModal: boolean = false;

  constructor(private chefService: ChefService) { }

  ngOnInit(): void {
    this.isLoading = this.chefService.getIsLoading();
    this.chefService.featchAllChefs();
    this.chefService.getAllChefs().subscribe((response) => {
      this.chefs = response;
    });

  }


}