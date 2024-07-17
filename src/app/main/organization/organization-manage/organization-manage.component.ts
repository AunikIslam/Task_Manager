import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Organization } from '../../../dto/organization';
import { BaseService } from '../../../services/service';
import { User } from '../../../dto/user';

@Component({
  selector: 'organization-manage',
  templateUrl: './organization-manage.component.html',
  styleUrl: './organization-manage.component.scss'
})
export class OrganizationManageComponent implements OnInit, OnChanges {

  @Input() shouldOpenManageWindow = false;
  @Input() organization = new Organization();
  @Input() user = new User();
  @Output() openConditionChangeListener = new EventEmitter<boolean>();
  @Output() reloadData = new EventEmitter<boolean>();

  constructor(private service: BaseService){

  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.shouldOpenManageWindow) {
      const modal = document.getElementById('organizationAddModal');
      modal.style.display = 'block';
    }
  }

  closeWindow(): void {
    this.openConditionChangeListener.emit();
    const modal = document.getElementById('organizationAddModal');
    modal.style.display = 'none';
  }

  addOrganizationToUser(): void {
    if(!this.user.organizations) {
      this.user.organizations = [];
    }
    this.user.organizations.push(this.organization);
    this.service.updateDataByNode('users', this.user.id, this.user).subscribe(pResponse => {
    });
  }
}
