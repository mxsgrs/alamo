import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  template: `
    <div class="page-header">
      <h1 class="title">{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
  `,
  styles: [`
    .page-header {
      padding-left: 1.75rem;
      padding-right: 2rem;
      margin-top: 2.5rem;
    }
    
    .title {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.5;
      margin: 0;
    }

    .subtitle {
      color: #6c757d;
      margin: 0;
    }
  `]
})
export class PageHeaderComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
}
