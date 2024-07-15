import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/service';
import { getEnumSelector } from '../../utilities/utilites';
import { StatusEnum } from '../../enums/task-status';
import { Task } from '../../dto/task';
import { SeletedMenuService } from '../../services/selected-menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  totalNumberOfOrganizations = 0;
  totalNumberofTasks = 0;
  taskList: Task[] = [];
  statusList = getEnumSelector(StatusEnum);
  statusWiseTaskList = [];

  constructor(private service: BaseService, private menuService: SeletedMenuService) {
    this.menuService.broadcastSelectedModuleId('DASHBOARD');
  }

  ngOnInit(): void {
    this.getTotalNumberOfOrganizations();
    this.prepareStatusWiseTasks();
  }

  getTotalNumberOfOrganizations(): void {
    this.service.getNumberOfOrganizations('organizations').subscribe(pResponse => {
      this.totalNumberOfOrganizations = pResponse;
    });
  }

  prepareStatusWiseTasks(): void {
    this.service.getDataList('tasks').subscribe(pResponse => {
      this.taskList = pResponse;
      this.totalNumberofTasks = pResponse.length;
      this.statusList.forEach(pStatus => {
        const totalTasks = this.taskList.filter(pItem => pItem.status == pStatus.value).length;
        this.statusWiseTaskList.push({status: pStatus.title, value: totalTasks});
      });
    });
  }

  googleLogIn(): void {
    this.service.googleSignIn();
  }
}
