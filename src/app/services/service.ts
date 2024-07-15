import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, from, map } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Organization } from '../dto/organization';
import { Task } from '../dto/task';
import { User } from '../dto/user';
import { v4 as uuidv4 } from 'uuid';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

@Injectable({ providedIn: 'root' })
export class BaseService {
  constructor(
    private fireDatabase: AngularFireDatabase,
    private fireAuth: AngularFireAuth
  ) {}

  googleSignIn() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      
    });
  }

  fetchData(pNode: string, 
    pSearchValue: any, pSearchField: string): Observable<any[]> {
    return this.fireDatabase.list(pNode, ref => 
      ref.orderByChild(pSearchField).equalTo(pSearchValue))
      .valueChanges();
  }

  getNumberOfOrganizations(pNode: string)
  : Observable<number> {
    return this.fireDatabase.list(pNode).snapshotChanges()
    .pipe(map(items => items.length));
  }

  getNumberOfTasks(pNode: string): Observable<number> {
    return this.fireDatabase.list(pNode)
    .snapshotChanges().pipe(map(items => items.length));
  }

  getDataList(pNode: string): Observable<any[]> {
    return this.fireDatabase.list(pNode).snapshotChanges().pipe(
      map(changes => 
        changes.map(c => 
          ({ key: c.payload.key, ...c.payload.val() as {} }))
      )
    );;
  }

  addOrganization(pOrganization: Organization): Observable<any> {
    pOrganization.id = uuidv4();
    return new Observable(() => {
      this.fireDatabase.list('organizations').push({
        id: pOrganization.id,
        orgName: pOrganization.orgName,
        address: pOrganization.address,
        phoneNumber: pOrganization.phoneNumber
      })
    });
  }

  updateOrganization(pNode: string, id: string, 
    organization: Partial<Organization>): Observable<void> {
    return from(this.fireDatabase.object(`${pNode}/${id}`)
    .update(organization));
  }

  addTask(pTask: Task): Observable<any> {
    pTask.id = uuidv4();
    return new Observable(() => {
      this.fireDatabase.list('tasks').push({
        id: pTask.id,
        name: pTask.name,
        description: pTask.description,
        organization: pTask.organization,
        assignedTo: pTask.assignedTo,
        status: pTask.status,
        priority: pTask.priority,
        comment: pTask.comment
      })
    });
  }

  updateTask(pNode: string, 
    id: string, task: Partial<Task>): Observable<void> {
    return from(this.fireDatabase.object(`${pNode}/${id}`)
    .update(task));
  }

  addUser(pUser: User): Observable<any> {
    pUser.id = uuidv4();
    return new Observable(() => {
      this.fireDatabase.list('users').push({
        id: pUser.id,
        userName: pUser.userName,
        email: pUser.email,
        userRole: pUser.userRole
      })
    });
  }

  updateUser(pNode: string, 
    id: string, user: Partial<User>): Observable<void> {
    return from(this.fireDatabase.object(`${pNode}/${id}`)
    .update(user));
  }
}
