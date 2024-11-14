import { Component } from '@angular/core';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { PageHeaderComponent } from 'app/shared/components/page-header/page-header.component';
import { ToolbarModule } from 'app/shared/components/toolbar/toolbar.module';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [TaskFormComponent, TaskListComponent, PageHeaderComponent, ToolbarModule],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.css'
})
export class TaskManagerComponent {

}
