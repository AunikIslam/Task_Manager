import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
const routes: Routes = [
  {
    path: 'task-item',
    loadChildren: () =>
      import('./main/task-item/task-item.module').then((m) => m.TaskItemModule),
  },
  {
    path: 'add-task',
    loadChildren: () =>
      import('./main/add-task/add-task.module').then((m) => m.AddTaskModule),
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}