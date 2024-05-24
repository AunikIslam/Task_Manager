import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskItemComponent } from './task-item.component';
import { SharedModule } from '../../../shared-module';

@NgModule({
  declarations: [TaskItemComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '**',
        component: TaskItemComponent,
      },
    ]),
    SharedModule,
  ],
})
export class TaskItemModule {}
