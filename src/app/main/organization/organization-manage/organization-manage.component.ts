import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Organization } from '../../../dto/organization';
import { BaseService } from '../../../services/service';

@Component({
  selector: 'organization-manage',
  templateUrl: './organization-manage.component.html',
  styleUrl: './organization-manage.component.scss'
})
export class OrganizationManageComponent implements OnInit, OnChanges {

  @Input() shouldOpenManageWindow = false;
  @Input() organization = new Organization();
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

  closeOrganizationWindow(): void {
    this.openConditionChangeListener.emit();
    const modal = document.getElementById('organizationAddModal');
    modal.style.display = 'none';
  }

  createOrganization(): void {
    this.service.addOrganization(this.organization).subscribe(() => {
    });
  }
}
