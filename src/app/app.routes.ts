import { Routes } from '@angular/router';
import { TaskManagerComponent } from './features/tasks/components/task-manager/task-manager.component';

export const routes: Routes = [
    {path: 'task-manager', component: TaskManagerComponent, title: 'Task Manager | Alamo'},
];