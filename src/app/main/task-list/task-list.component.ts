import { Component } from '@angular/core';
import { TaskService } from '../../services/service';
import { Task } from '../../dto/task';
import { MatSelectChange } from '@angular/material/select';

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
    this.taskService.updateTask(task);
  }

  deleteTask(taskId: string) {
    this.taskService.deleteTask(taskId);
  }

  filterTasks(pEvent: MatSelectChange): void {
    this.taskService.filterTask(pEvent.value);
  }
}
