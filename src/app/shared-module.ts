import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskItemModule } from './main/task-item/task-item.module';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  bootstrap: [],
})
export class SharedModule {}
