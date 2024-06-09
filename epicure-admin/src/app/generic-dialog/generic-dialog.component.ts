import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IRestaurant } from '../interface/restaurant.interface';
import { IChef } from '../interface/chef.interface';
import { IDish } from '../interface/dish.interface';
import { RestaurantService } from '../service/restaurant.service';
import { DishService } from '../service/dish.service';
import { ChefService } from '../service/chef.service';
import { IconMeaning } from '../interface/dish.interface';


@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.scss']
})
export class GenericDialogComponen {
  form: FormGroup;
  defaultValues: Partial<IRestaurant> = {
    title: '',
    image: '',
    
  };

  iconMeaning = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];



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
    this.data.columns.forEach((column: string) => {
      if (column !== '_id' && column !== 'actions') {
        const defaultValue = this.defaultValues[column as keyof IRestaurant] || '';
        this.form.addControl(column, this.fb.control(defaultValue, Validators.required));
      }
    });
  }

  submitForm() {
    if (this.form.valid) {
      let formData;

      switch (this.data.pageTitle) {
        case 'Restaurant':
          formData = this.form.value as IRestaurant;
          this.restaurantService.addRestaurant(formData)
          this.dialogRef.close(formData);
          break;
        case 'Chef':
          formData = this.form.value as IChef;
          this.chefService.addChef(formData);
          this.dialogRef.close(formData);
          break;
        case 'Dish':
          console.log("submitForm")  
        formData = this.form.value as IDish;
          this.dishService.addDish(formData);
          this.closeDialog();
          break;
      }
      
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
