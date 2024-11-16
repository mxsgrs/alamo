import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../../models/task';
import { MatListModule } from '@angular/material/list';
import { MatCard } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [MatListModule, CommonModule, MatCard],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {
  taskService: TaskService = inject(TaskService);
  tasks: Task[] = [];

  ngOnInit(): void {
    this.taskService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
    });
  }
}
