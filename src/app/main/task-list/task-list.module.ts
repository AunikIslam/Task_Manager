import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared-module';
import { TaskListComponent } from './task-list.component';

@NgModule({
  declarations: [TaskListComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '**',
        component: TaskListComponent,
      },
    ]),
    SharedModule
  ],
})
export class TaskListModule {}
