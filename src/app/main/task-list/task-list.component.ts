import { Component } from '@angular/core';
import { TaskService } from '../../services/service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks$: Task[] = [];

  constructor(private taskService: TaskService) {
    this.taskService.sharedTaskList.subscribe(pTasks => {
      console.log(pTasks);
    })
    
  }

  ngOnInit(): void {}

  // onTaskUpdated(task: Task) {
  //   this.taskService.updateTask(task);
  // }

  // onTaskDeleted(taskId: number) {
  //   this.taskService.deleteTask(taskId);
  // }
}
