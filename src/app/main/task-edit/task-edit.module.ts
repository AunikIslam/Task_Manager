import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared-module';
import { TaskEditComponent } from './task-edit.component';

@NgModule({
  declarations: [TaskEditComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '**',
        component: TaskEditComponent,
      },
    ]),
    SharedModule
  ],
})
export class TaskEditModule {}
