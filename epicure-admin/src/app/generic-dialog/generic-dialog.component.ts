import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { IRestaurant } from '../interface/restaurant.interface';
import { IChef } from '../interface/chef.interface';
import { IDish } from '../interface/dish.interface';
import { RestaurantService } from '../service/restaurant.service';
import { DishService } from '../service/dish.service';
import { ChefService } from '../service/chef.service';

@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.scss']
})
export class GenericDialogComponen {
  form: FormGroup;
  editRow: boolean = false;
  editedData: any;

  constructor(
    public dialogRef: MatDialogRef<GenericDialogComponen>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private restaurantService: RestaurantService,
    private chefService: ChefService,
    private dishService: DishService
  ) {
    this.form = this.fb.group({});
    this.initializeForm();
  }

  initializeForm() {
    this.editRow = this.data.editRow;
    const editedData = this.data.editedData || {};
  
    this.data.columns.forEach((column: string) => {
      if (column !== '_id' && column !== 'actions') {
        let defaultValue = editedData[column] || '';
  
        let controlConfig = [Validators.required];
  
        if (this.data.columnTypes[column] === 'slideToggle') {
          defaultValue = defaultValue || false; // Initialize slide toggle as false if no default value
        }
  
        this.form.addControl(column, this.fb.control(defaultValue, controlConfig));
      }
    });
  }
  
  submitForm() {
    if (this.form.valid) {
      let formData;
      switch (this.data.pageTitle) {
        case 'Restaurant':
          formData = this.form.value as IRestaurant;
          
          if(this.editRow) {
            this.restaurantService.updateRestaurant(this.data.editingElementId, formData);
          } else {
            this.restaurantService.addRestaurant(formData);
          }
          
          this.dialogRef.close(formData);
          break;
        case 'Chef':
          formData = this.form.value as IChef;
          
          if(this.editRow) {
            this.chefService.updateChef(this.data.editingElementId, formData);
          } else {
            this.chefService.addChef(formData);
          }
        
          this.dialogRef.close(formData);
          break;
        case 'Dish':
          formData = this.form.value as IDish;
          
          if(this.editRow) {
            this.dishService.updateDish(this.data.editingElementId, formData);
          } else {
            this.dishService.addDish(formData);
          }

          this.closeDialog();
          break;
      }
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
