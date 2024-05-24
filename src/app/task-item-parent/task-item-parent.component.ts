import { Component } from '@angular/core';
import { TaskService } from '../services/service';

@Component({
  selector: 'app-task-item-parent',
  templateUrl: './task-item-parent.component.html',
  styleUrl: './task-item-parent.component.css'
})
export class TaskItemParentComponent {
  tasks: any;

  constructor(private taskService: TaskService) {
    this.taskService.sharedTaskList.subscribe(pTasks => {
      this.tasks = pTasks;
      console.log(this.tasks);
    })
    
  }

  ngOnInit(): void {}
}
