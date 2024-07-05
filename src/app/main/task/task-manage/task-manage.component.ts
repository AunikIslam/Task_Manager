import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Task } from '../../../dto/task';
import { BaseService } from '../../../services/service';
import { getEnumSelector } from '../../../utilities/utilites';
import { StatusEnum } from '../../../enums/task-status';
import { User } from '../../../dto/user';

@Component({
  selector: 'task-manage',
  templateUrl: './task-manage.component.html',
  styleUrl: './task-manage.component.scss'
})
export class TaskManageComponent implements OnInit, OnChanges {

  @Input() shouldOpenManageWindow = false;
  @Input() task = new Task();
  @Output() openConditionChangeListener = new EventEmitter<boolean>();
  @Output() reloadData = new EventEmitter<boolean>();
  statusList = getEnumSelector(StatusEnum);
  users: User[] = [];

  constructor(private service: BaseService){

  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.shouldOpenManageWindow) {
      const modal = document.getElementById('taskAddModal');
      modal.style.display = 'block';
    }
  }

  closeOrganizationWindow(): void {
    this.openConditionChangeListener.emit();
    const modal = document.getElementById('taskAddModal');
    modal.style.display = 'none';
  }

  createOrganization(): void {
    this.service.addTask(this.task).subscribe(() => {
    });
  }

}
