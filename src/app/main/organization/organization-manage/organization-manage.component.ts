import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-organization-manage',
  templateUrl: './organization-manage.component.html',
  styleUrl: './organization-manage.component.css'
})
export class OrganizationManageComponent implements OnInit, OnChanges {

  @Input() shouldAddWindowOpen = false;


  constructor(){

  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.shouldAddWindowOpen) {

    }
  }
}
