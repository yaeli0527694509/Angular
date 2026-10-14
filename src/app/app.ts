import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [RouterOutlet, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
 title: string = "Access to install educational software on the computer";
 id:number|null = null;

question = signal(false);

  /** נקרא בכל שינוי של התיבה ומעדכן את הסיגנל לערך המדויק שלה */
  onQuestionChange(event: Event): void {
    this.question.set((event.target as HTMLInputElement).checked);
  }
}

