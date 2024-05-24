import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskListComponent } from './main/task-list/task-list.component';
import { TaskListModule } from './main/task-list/task-list.module';
import { TaskItemComponent } from './main/task-item/task-item.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


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
  },
  {
    path: 'task-list',
    loadChildren: () =>
      import('./main/task-list/task-list.module').then((m) => m.TaskListModule),
  }
];

@NgModule({
  declarations: [AppComponent, TaskListComponent, TaskItemComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}