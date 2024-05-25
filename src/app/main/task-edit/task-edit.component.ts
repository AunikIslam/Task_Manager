import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../dto/task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent {
  task = new Task();
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        if (params['id']) {
            
        } else {
            console.log('log');
        }
    });
}
}
