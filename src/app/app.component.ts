import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SeletedMenuService } from './services/selected-menu.service';
import { navigations } from './navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showToolbar = false;
  shouldOrgAddWindowOpen = false;
  menuId: string;
  navigations = navigations;

  constructor(private router: Router, private menuService: SeletedMenuService) {
    this.menuService.sharedModuleId.subscribe(pId => {
      this.menuId = pId;
    });
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if(event.url.includes('login') || event.url.includes('sign-up')) {
          this.showToolbar = false;
        } else {
          this.showToolbar = true;
        }
      }
    });
  }

  openOrganizationManageModal(): void {
    this.shouldOrgAddWindowOpen = null;
    setTimeout(() => {
        this.shouldOrgAddWindowOpen = true;
    }, 0);
  }

}