import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './main/authentication/login/login.component';
import { SharedModule } from './shared-module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { OrganizationManageComponent } from './main/organization/organization-manage/organization-manage.component';
import { OrganizationListComponent } from './main/organization/organization-list/organization-list.component';
import { TaskListComponent } from './main/task/task-list/task-list.component';
import { TaskManageComponent } from './main/task/task-manage/task-manage.component';
import { UserListComponent } from './main/user/user-list/user-list.component';
import { UserManageComponent } from './main/user/user-manage/user-manage.component';

const routes: Routes = [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'organizations',
      component: OrganizationListComponent
    },
    {
      path: 'tasks',
      component: TaskListComponent
    },
    {
      path: 'users',
      component: UserListComponent
    }
];

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, OrganizationManageComponent, OrganizationListComponent, 
    TaskListComponent, TaskManageComponent, UserListComponent, UserManageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}