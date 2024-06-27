import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'organization-manage',
  templateUrl: './organization-manage.component.html',
  styleUrl: './organization-manage.component.scss'
})
export class OrganizationManageComponent implements OnInit, OnChanges {

  @Input() shouldAddWindowOpen = false;


  constructor(){

  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.shouldAddWindowOpen) {
      console.log('Called');
      const modal = document.getElementById('orgManageModal');
      modal.style.display = 'block';
    }
  }
}
