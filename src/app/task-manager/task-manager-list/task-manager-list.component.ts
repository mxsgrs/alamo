import { Component } from '@angular/core';
import { Task } from '@models/task';

@Component({
  selector: 'app-task-manager-list',
  standalone: true,
  imports: [],
  templateUrl: './task-manager-list.component.html',
  styleUrl: './task-manager-list.component.css'
})
export class TaskManagerListComponent {
  tasks: Task[] = [
    new Task(1, 'Task 1', 'Pending'),
    new Task(2, 'Task 2', 'Completed'),
    new Task(3, 'Task 3', 'In Progress')
  ]
}
