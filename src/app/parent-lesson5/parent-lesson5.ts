import { Component } from '@angular/core';
import { ChildLesson5 } from '../child-lesson5/child-lesson5';

@Component({
  imports: [ChildLesson5],
  selector: 'app-parent-lesson5',
  styleUrl: './parent-lesson5.css',
  templateUrl: './parent-lesson5.html',
})
export class ParentLesson5 {
  
  receiveFromChild(seconds: number) {
    // console.log('The timer ran for ' + seconds + ' seconds.');
    alert('The timer ran for ' + seconds + ' seconds.');
  }
}
