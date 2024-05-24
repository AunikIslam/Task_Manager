import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskItemParentComponent } from './task-item-parent.component';
import { SharedModule } from '../shared-module';
import { TaskItemModule } from '../main/task-item/task-item.module';

@NgModule({
  declarations: [TaskItemParentComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '**',
        component: TaskItemParentComponent,
      },
    ]),
    SharedModule,
    TaskItemModule
  ]
})
export class TaskItemParentModule {}
