import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from '../../../dto/user';
import { BaseService } from '../../../services/service';
import { getEnumSelector } from '../../../utilities/utilites';
import { UserRoleEnum } from '../../../enums/user-roles';
import { Organization } from '../../../dto/organization';
import { Space } from '../../../dto/space';

@Component({
  selector: 'user-manage',
  templateUrl: './user-manage.component.html',
  styleUrl: './user-manage.component.scss'
})
export class UserManageComponent {
  @Input() shouldOpenManageWindow = false;
  @Input() user = new User();
  @Output() openConditionChangeListener = new EventEmitter<boolean>();
  @Output() reloadData = new EventEmitter<boolean>();
  spaces: Space[] = [];

  constructor(private service: BaseService){

  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('loggedUser'));
    this.service
      .fetchDataByNode('users', user.id)
      .subscribe((pResponse) => {
        this.user = pResponse;
        this.spaces = pResponse.spaces ? pResponse.spaces : []; 
      });
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.shouldOpenManageWindow) {
      const modal = document.getElementById('userAddModal');
      modal.style.display = 'block';
    }
  }

  compareById( pObj1: any, pObj2: any ): boolean {
    return pObj1 && pObj2 && pObj1[ 'id' ] === pObj2[ 'id' ];
  }

  closeWindow(): void {
    this.openConditionChangeListener.emit();
    const modal = document.getElementById('userAddModal');
    modal.style.display = 'none';
  }

  createUser(): void {
    this.service.addUser(this.user).subscribe(() => {
    });
  }

  updateUser(): void {
    this.service.updateUser('users', this.user.id, this.user).subscribe(pResponse => {
    });
  }
}
