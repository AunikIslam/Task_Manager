import { Component, OnInit } from '@angular/core';
import { Organization } from '../../../dto/organization';
import { BaseService } from '../../../services/service';
import { User } from '../../../dto/user';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrl: './organization-list.component.scss'
})
export class OrganizationListComponent implements OnInit {

  organizations: Organization[] = [];
  organization = new Organization();
  openOrganizationManageWindow = false;
  user = new User();

  constructor(private service: BaseService) {

  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('loggedUser'));
    this.service
      .fetchDataByNode('users', this.user.id)
      .subscribe((pResponse) => {
        this.user = pResponse;
        console.log(this.user);
        this.organizations = pResponse.organizations ? pResponse.organizations : []; 
      });
  }

  getOrganization(pOrganization: Organization): void {
    this.openOrganizationManageWindow = true;
    pOrganization ? this.organization = JSON.parse(JSON.stringify(pOrganization)) : this.organization = new Organization();
  }

  updateWindowOpenCondition(): void {
    this.openOrganizationManageWindow = false;
    this.organization = new Organization();
  }
}
