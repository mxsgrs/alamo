import { Routes } from '@angular/router';
import { TaskManagerWrapperComponent } from './task-manager/task-manager-wrapper/task-manager-wrapper.component';

export const routes: Routes = [
    {path: 'task-manager', component: TaskManagerWrapperComponent, title: 'Task Manager | Alamo'},
];