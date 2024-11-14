import { Component } from '@angular/core';
import { TaskManagerFormComponent } from "../task-manager-form/task-manager-form.component";
import { TaskManagerListComponent } from '../task-manager-list/task-manager-list.component';
import { PageHeaderComponent } from 'components/page-header.component';
import { ToolbarModule } from 'components/Toolbar/toolbar.module';

@Component({
  selector: 'app-task-manager-wrapper',
  standalone: true,
  imports: [TaskManagerFormComponent, TaskManagerListComponent, PageHeaderComponent, ToolbarModule],
  templateUrl: './task-manager-wrapper.component.html',
  styleUrl: './task-manager-wrapper.component.css'
})
export class TaskManagerWrapperComponent {

}
