import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
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
      font-weight: 600;
      line-height: 1.5;
      letter-spacing: -0.025em;
    }

    .subtitle {
      color: #6c757d;
      margin-top: 0.125rem;
    }
  `]
})
export class PageHeaderComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
}
