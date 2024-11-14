import { Component } from '@angular/core';
import { Task } from '@models/task/task';
import { MatListModule } from '@angular/material/list';
import { TaskStatus } from '@models/task/task-status';

@Component({
  selector: 'app-task-manager-list',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './task-manager-list.component.html',
  styleUrl: './task-manager-list.component.css'
})
export class TaskManagerListComponent {
  tasks: Task[] = [
    new Task(1, 'Store new data', 'Extract data from Excel files and load it.', TaskStatus.Pending),
    new Task(2, 'Finish latest sprint', 'Sprint #19349 need to be finished by the end of the week.', TaskStatus.Completed),
    new Task(3, 'Daily meeting', 'Contact everyone and have a talk.', TaskStatus.InProgress)
  ]
}
