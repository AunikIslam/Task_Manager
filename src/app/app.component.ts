import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showToolbar = false;

  constructor(private router: Router) {
    this.router.navigate(['login']);
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if(event.url.includes('login')) {
          this.showToolbar = false;
        } else {
          this.showToolbar = true;
        }
      }
    });
  }

}