import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [RouterOutlet, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  private readonly router = inject(Router);

  title = 'גישה להתקנת תוכנות לימודיות על המחשב';
  id: number | null = null;

  question = signal(false);

  onQuestionChange(event: Event): void {
    this.question.set((event.target as HTMLInputElement).checked);
  }

  enterMarks(): void {
    if (this.question()) {
      void this.router.navigate(['/marks']);
    }
  }
}
