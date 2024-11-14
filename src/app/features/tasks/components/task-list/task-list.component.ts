import { Component } from '@angular/core';
import { Task } from '../../models/task';
import { MatListModule } from '@angular/material/list';
import { MatCard } from '@angular/material/card';
import { TaskStatus } from '../../models/task-status';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [MatListModule, CommonModule, MatCard],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [
    new Task(1, 'Store new data', 'Extract data from Excel files and load it.', TaskStatus.Pending, new Date(2024, 4, 2)),
    new Task(2, 'Finish latest sprint', 'Sprint #19349 need to be finished by the end of the week.', TaskStatus.Completed, new Date(2024, 6, 28)),
    new Task(3, 'Daily meeting', 'Contact everyone and have a talk.', TaskStatus.InProgress, new Date(2024, 1, 17))
  ]
}
