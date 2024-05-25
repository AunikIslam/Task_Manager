import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../dto/task';
import { TaskService } from '../../services/service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent {
  task = new Task();
  constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        if (params['id']) {
            this.task = this.taskService.getTaskDetails(params['id']);
        } else {
            
        }
    });
  }

  editTask(): void {
    this.taskService.updateTask(this.task);
    this.router.navigate(['task-list']);
  }
}
