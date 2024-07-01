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

  constructor(private service: BaseService) {

  }

  ngOnInit(): void {
    this.service.getOrganizationsList('organizations').subscribe(pResponse => {
      this.organizations = pResponse;
    });
  }
}
