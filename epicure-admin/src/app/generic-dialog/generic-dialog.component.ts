import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrl: './generic-dialog.component.scss'
})
export class GenericDialogComponen {
    name: string = '';
    email: string =  '';
    address: string =  '';
    mobile:string =  '';
    age: string = '';
    gender:string =  '';

  
  constructor( public dialogRef: MatDialogRef<GenericDialogComponen>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {}

  submitForm(form: any): void {
    if (form.valid) {
      console.log('Form data:', this.name);
    }
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
  
   



