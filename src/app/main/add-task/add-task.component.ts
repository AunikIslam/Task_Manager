import { Component } from '@angular/core';
import { Task } from '../../dto/task';
import { TaskService } from '../../services/service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  task = new Task();
  constructor(private service: TaskService) {
    
  }
}
