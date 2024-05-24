import { Component } from '@angular/core';
import { Task } from '../../dto/task';
import { TaskService } from '../../services/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  task = new Task();
  constructor(private service: TaskService, private router: Router) {

  }

  addTask(): void {
    this.service.addTask(this.task);
    this.router.navigate(['task-list']);
  }
}
