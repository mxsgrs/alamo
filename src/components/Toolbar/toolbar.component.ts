import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
    <mat-toolbar>
      <span>Alamo</span>
      <span class="example-spacer"></span>
      <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
          <ng-icon name="ionLogoGithub"></ng-icon>
      </button>
    </mat-toolbar>
  `
})
export class ToolbarComponent {}
