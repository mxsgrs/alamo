import { Component, inject } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatLabel} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskStatus } from '../../models/task-status';
import { TaskService } from '../../services/task.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [MatFormField, MatInput, MatOption, MatLabel, MatSelectModule, MatButton, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  form: FormGroup;
  taskService: TaskService = inject(TaskService);
  taskStatuses = Object.values(TaskStatus);
  private _snackBar = inject(MatSnackBar);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [crypto.randomUUID()],
      name: ['', Validators.required],
      description: ['', Validators.required],
      status: [TaskStatus.Pending],
      creationDate: [new Date()]
    })
  }

  onSubmit() {
    this.taskService.addTask(this.form.value);
    this._snackBar.open('Your task was added to the list!', 'Ok', {
      duration: 3000
    });
  }
}