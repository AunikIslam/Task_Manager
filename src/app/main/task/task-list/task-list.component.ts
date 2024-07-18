import { Component } from '@angular/core';
import { BaseService } from '../../../services/service';
import { Task } from '../../../dto/task';
import { StatusEnum } from '../../../enums/task-status';
import { PriorityPipe } from '../../../pipe/priority-pipe';
import { SeletedMenuService } from '../../../services/selected-menu.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  providers: [PriorityPipe]
})
export class TaskListComponent {
  tasks: Task[] = [];
  task = new Task();
  openManageWindow = false;
  statusListEnum = StatusEnum;

  constructor(private service: BaseService, private menuService: SeletedMenuService) {
    this.menuService.broadcastSelectedModuleId('TASK');
  }

  ngOnInit(): void {
    this.service.getDataList('tasks').subscribe(pResponse => {
      this.tasks = pResponse;
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
