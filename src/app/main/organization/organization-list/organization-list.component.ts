import { Component, OnInit } from '@angular/core';
import { Organization } from '../../../dto/organization';
import { BaseService } from '../../../services/service';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrl: './organization-list.component.css'
})
export class OrganizationListComponent implements OnInit {

  organizations: Organization[] = [];
  organization = new Organization();
  openOrganizationManageWindow = false;

  constructor(private service: BaseService) {

  }

  ngOnInit(): void {
    this.service.getOrganizationsList('organizations').subscribe(pResponse => {
      this.organizations = pResponse;
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
