import { Component, OnInit } from '@angular/core';
import { User } from '../../../dto/user';
import { BaseService } from '../../../services/service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  user = new User();
  openManageWindow = false;

  constructor(private service: BaseService) {

  }

  ngOnInit(): void {
    this.service.getDataList('users').subscribe(pResponse => {
      this.users = pResponse;
    });
  }

  getUser(pUser: User): void {
    this.openManageWindow = true;
    pUser ? this.user = JSON.parse(JSON.stringify(pUser)) : this.user = new User();
  }

  updateWindowOpenCondition(): void {
    this.openManageWindow = false;
    this.user = new User();
  }
}
