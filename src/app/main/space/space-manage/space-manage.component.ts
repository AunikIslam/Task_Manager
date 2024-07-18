import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Space } from '../../../dto/space';
import { User } from '../../../dto/user';
import { BaseService } from '../../../services/service';

@Component({
  selector: 'app-space-manage',
  templateUrl: './space-manage.component.html',
  styleUrl: './space-manage.component.css'
})
export class SpaceManageComponent implements OnInit, OnChanges {

  @Input() shouldOpenManageWindow = false;
  @Input() space = new Space();
  @Input() user = new User();
  @Output() openConditionChangeListener = new EventEmitter<boolean>();
  @Output() reloadData = new EventEmitter<boolean>();

  constructor(private service: BaseService){

  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.shouldOpenManageWindow) {
      const modal = document.getElementById('spaceAddModal');
      modal.style.display = 'block';
    }
  }

  closeWindow(): void {
    this.openConditionChangeListener.emit();
    const modal = document.getElementById('spaceAddModal');
    modal.style.display = 'none';
  }

  addSpaceToUser(): void {
    if(!this.user.spaces) {
      this.user.spaces = [];
    }
    this.user.spaces.push(this.space);
    this.service.updateDataByNode('users', this.user.id, this.user).subscribe(pResponse => {
    });
  }
}
