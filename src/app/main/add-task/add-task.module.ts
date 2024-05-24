import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddTaskComponent } from './add-task.component';
import { SharedModule } from '../../shared-module';

@NgModule({
  declarations: [AddTaskComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '**',
        component: AddTaskComponent,
      },
    ]),
    SharedModule
  ],
})
export class AddTaskModule {}
