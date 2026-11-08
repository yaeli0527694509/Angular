import { Component, EventEmitter, Output } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  imports: [NgStyle],
  selector: 'app-child-lesson5',
  styleUrl: './child-lesson5.css',
  templateUrl: './child-lesson5.html',
})
export class ChildLesson5 {
  second = 0;
  timer: any;
  startBtnColor = 'lightblue';


  startTimer() {
    this.second = 0;
    this.startBtnColor = "yellow";
    this.timer = setInterval(() => {
      // console.log(this.second++);
      this.second++;
    }, 1000);
  }

 @Output() secondChanged = new EventEmitter<number>();
  
 sendToParent() {
    this.startBtnColor = 'lightblue';
    clearInterval(this.timer);
    //console.log('Seconds: ', this.second);
    this.secondChanged.emit(this.second);
  }

}
