import { Component } from '@angular/core';
import { BaseService } from '../../../services/service';
import { Task } from '../../../dto/task';
import { StatusEnum } from '../../../enums/task-status';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks: Task[] = [];
  task = new Task();
  openManageWindow = false;
  statusListEnum = StatusEnum;

  constructor(private service: BaseService) {
    
  }

  ngOnInit(): void {
    this.service.getDataList('tasks').subscribe(pResponse => {
      this.tasks = pResponse;
      console.log(this.tasks);
    });
  }

  getTask(pTask: Task): void {
    this.openManageWindow = true;
    pTask ? this.task = JSON.parse(JSON.stringify(pTask)) : this.task = new Task();
  }

  updateWindowOpenCondition(): void {
    this.openManageWindow = false;
    this.task = new Task();
  }
}
