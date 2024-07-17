import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from '../../../dto/user';
import { BaseService } from '../../../services/service';
import { getEnumSelector } from '../../../utilities/utilites';
import { UserRoleEnum } from '../../../enums/user-roles';

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

  constructor(private service: BaseService){

  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.shouldOpenManageWindow) {
      const modal = document.getElementById('userAddModal');
      modal.style.display = 'block';
    }
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
