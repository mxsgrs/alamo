import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgIconsModule } from '@ng-icons/core';
import { ionLogoGithub } from '@ng-icons/ionicons';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    NgIconsModule.withIcons({ ionLogoGithub }),
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule {}
