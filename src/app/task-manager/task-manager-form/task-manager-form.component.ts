import { Component } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatLabel} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-task-manager-form',
  standalone: true,
  imports: [MatFormField, MatInput, MatOption, MatLabel, MatSelectModule, MatButton],
  templateUrl: './task-manager-form.component.html',
  styleUrl: './task-manager-form.component.css'
})
export class TaskManagerFormComponent {

}
