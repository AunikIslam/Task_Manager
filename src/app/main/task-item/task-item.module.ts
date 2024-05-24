import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared-module';
import { TaskItemComponent } from './task-item.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '**',
        component: TaskItemComponent,
      },
    ]),
    SharedModule,
  ],
  exports: [
    TaskItemComponent
  ]
})
export class TaskItemModule {}
