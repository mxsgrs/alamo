import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { BehaviorSubject } from 'rxjs';
import { TaskStatus } from '../models/task-status';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([
    new Task(crypto.randomUUID(), 'Store new data', 'Extract data from Excel files and load it.', TaskStatus.Pending, new Date(2024, 4, 2)),
    new Task(crypto.randomUUID(), 'Finish latest sprint', 'Sprint #19349 needs to be finished by the end of the week.', TaskStatus.Completed, new Date(2024, 6, 28)),
    new Task(crypto.randomUUID(), 'Daily meeting', 'Contact everyone and have a talk.', TaskStatus.InProgress, new Date(2024, 1, 17))
  ]);
  
  public tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

  addTask(newTask: Task) {
    const currentTasks = this.tasksSubject.value;
    this.tasksSubject.next([...currentTasks, newTask]);
  }
}
