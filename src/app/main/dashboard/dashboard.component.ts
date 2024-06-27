import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  totalNumberOfOrganizations = 0;

  constructor(private service: BaseService) {

  }

  ngOnInit(): void {
    this.service.getNumberOfOrganizations('organizations').subscribe(pResponse => {
      this.totalNumberOfOrganizations = pResponse;
    });
  }
}
