import { Component } from '@angular/core';
import { TaskService } from '../../services/service';
import { Observable } from 'rxjs';
import { Task } from '../../dto/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: any;

  constructor(private taskService: TaskService) {
    this.taskService.sharedTaskList.subscribe(pTasks => {
      this.tasks = pTasks;
    })
    
  }

  ngOnInit(): void {}

  updateTask(task: Task) {
    // this.taskService.updateTask(task);
  }

  onTaskDeleted(taskId: string) {
    this.taskService.deleteTask(taskId);
  }
}
