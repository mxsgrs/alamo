import { Component } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatLabel} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { TaskStatus } from '../../models/task-status';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [MatFormField, MatInput, MatOption, MatLabel, MatSelectModule, MatButton],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  taskStatuses = Object.values(TaskStatus);
}