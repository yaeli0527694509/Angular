import { Component } from '@angular/core';
import { ChildLesson4 } from '../child-lesson4/child-lesson4';

@Component({
  imports: [ChildLesson4],
  selector: 'app-parent-lesson4',
  styleUrl: './parent-lesson4.css',
  templateUrl: './parent-lesson4.html',
})
export class ParentLesson4 {
  selectedItem = null;

  Electrical_items = [
    { name: 'Laptop', company: 'Dell', description: 'A high-performance laptop for work.', price: 1200, discountPercentage: 10 },
    { name: 'Headphones', company: 'Sony', description: 'Noise-cancelling over-ear headphones.', price: 250, discountPercentage: 15 },
    { name: 'Bluetooth Speaker', company: 'JBL', description: 'Portable Bluetooth speaker with excellent sound quality.', price: 150, discountPercentage: 5 },
    { name: 'mouse', company: 'Logitech', description: 'Wireless mouse with ergonomic design.', price: 50, discountPercentage: 12 },
    { name: 'Keyboard', company: 'Corsair', description: 'Mechanical gaming keyboard with customizable RGB lighting.', price: 100, discountPercentage: 8 },
    { name: 'printer', company: 'HP', description: 'All-in-one printer with wireless connectivity.', price: 200, discountPercentage: 20 },
  ];
  
}