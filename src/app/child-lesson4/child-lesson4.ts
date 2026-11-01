import { Component, input } from '@angular/core';

type ElectricalItem = {
  name: string;
  company: string;
  description: string;
  price: number;
  discountPercentage: number;
};

@Component({
  imports: [],
  selector: 'app-child-lesson4',
  styleUrl: './child-lesson4.css',
  templateUrl: './child-lesson4.html',
})
export class ChildLesson4 {
  Electrical_items = input<ElectricalItem[]>([]);
  selectedItem = input<ElectricalItem | null>(null);
}
