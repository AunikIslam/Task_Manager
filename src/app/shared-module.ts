import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule
  ],
  bootstrap: [],
})
export class SharedModule {}
