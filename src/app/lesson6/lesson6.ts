import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  imports: [ReactiveFormsModule, NgFor],
  selector: 'app-lesson6',
  styleUrl: './lesson6.css',
  templateUrl: './lesson6.html',
})
export class Lesson6 {

  readonly reasons: string[] = [
    'התקנת מוצר חדש',
    'תקלה בתקופת אחריות החברה',
    'תקלה לאחר תקופת האחריות'
  ];

  TechnicianVisit: FormGroup = new FormGroup({
    date: new FormControl('', Validators.required),
    requesterName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]),
    reason: new FormControl('', Validators.required),
    invoiceNumber: new FormControl(''),
    description: new FormControl('', Validators.required)
  });

  constructor() {
    const reasonControl = this.TechnicianVisit.get('reason')!;
    const invoiceControl = this.TechnicianVisit.get('invoiceNumber')!;
    const descriptionControl = this.TechnicianVisit.get('description')!;

    const updateValidators = () => {
      const isNewInstallation = reasonControl.value === this.reasons[0];

      if (isNewInstallation) {
        invoiceControl.setValidators([Validators.required]);
        descriptionControl.clearValidators();
      } else {
        invoiceControl.clearValidators();
        descriptionControl.setValidators([Validators.required]);
      }

      invoiceControl.updateValueAndValidity();
      descriptionControl.updateValueAndValidity();
    };

    updateValidators();
    reasonControl.valueChanges.subscribe(updateValidators);
  }



}
