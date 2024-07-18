import { Component } from '@angular/core';
import { Space } from '../../../dto/space';
import { User } from '../../../dto/user';
import { BaseService } from '../../../services/service';
import { SeletedMenuService } from '../../../services/selected-menu.service';

@Component({
  selector: 'app-space-list',
  templateUrl: './space-list.component.html',
  styleUrl: './space-list.component.css'
})
export class SpaceListComponent {
  spaces: Space[] = [];
  space = new Space();
  openManageWindow = false;
  user = new User();

  constructor(private service: BaseService, private menuService: SeletedMenuService) {
    this.menuService.broadcastSelectedModuleId('SPACES');
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('loggedUser'));
    this.service
      .fetchDataByNode('users', this.user.id)
      .subscribe((pResponse) => {
        this.user = pResponse;
        this.spaces = pResponse.spaces ? pResponse.spaces : []; 
      });
  }

  getOrganization(pSpace: Space): void {
    this.openManageWindow = true;
    pSpace ? this.space = JSON.parse(JSON.stringify(pSpace)) : this.space = new Space();
  }

  updateWindowOpenCondition(): void {
    this.openManageWindow = false;
    this.space = new Space();
  }
}
