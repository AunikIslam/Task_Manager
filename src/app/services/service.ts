import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, from, map } from 'rxjs';
import { Organization } from '../dto/organization';
import { Task } from '../dto/task';
import { User } from '../dto/user';
import { v4 as uuidv4 } from 'uuid';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Router } from '@angular/router';
import { getDatabase, ref, query, orderByChild, equalTo, get, update } from 'firebase/database';
import { Space } from '../dto/space';


@Injectable({ providedIn: 'root' })
export class BaseService {
  constructor(
    private fireDatabase: AngularFireDatabase,
    private router: Router
  ) {}

  googleSignIn() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
      return { user, token }; // Return an object containing the user and token
    })
    .catch((error) => {
      console.error('Error during sign in:', error);
      throw error; // Re-throw the error to be handled by the caller
    });
  }

  fetchData(pNode: string, 
    pSearchValue: any, pSearchField: string): Observable<any[]> {
    return this.fireDatabase.list(pNode, ref => 
      ref.orderByChild(pSearchField).equalTo(pSearchValue))
      .valueChanges();
  }

  fetchDataByNode(pNode: string, pSearchValue: any): Observable<any> {
    return new Observable(subscriber => {
      const db = getDatabase();
      const node = ref(db, pNode);
      const dataQuery = query(node, orderByChild('id'), equalTo(pSearchValue));
      // Query the database to find the user by email
      get(dataQuery).then(snapshot => {
        if (snapshot.exists()) {
          let data = snapshot.val();
          subscriber.next(data[Object.keys(data)[0]]);
          subscriber.complete();
        } else {
          subscriber.error('No user found with this email.');
        }
      }).catch(error => {
        subscriber.error('Error fetching user data: ' + error);
      });
    });
  }

  updateDataByNode(pNode: string, pSearchValue: any, pNewValue: any): Observable<any[]> {
    return new Observable(subscriber => {
      const db = getDatabase();
      const node = ref(db, pNode);
      const dataQuery = query(node, orderByChild('id'), equalTo(pSearchValue));
  
      
      get(dataQuery).then(snapshot => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          const userId = Object.keys(userData)[0];
          console.log(userId);
          const userUpdateRef = ref(db, `${pNode}/${userId}`);
  
          // Update the user data
          update(userUpdateRef, pNewValue).then(() => {
            subscriber.complete();
          }).catch(error => {
            subscriber.error('Error updating user data: ' + error);
          });
        } else {
          subscriber.error('No user found with this email.');
        }
      }).catch(error => {
        subscriber.error('Error fetching user data: ' + error);
      });
    });
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

  addSpace(pSpace: Space): Observable<any> {
    pSpace.id = uuidv4();
    return new Observable(() => {
      this.fireDatabase.list('spaces').push({
        id: pSpace.id,
        name: pSpace.name
      })
    });
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
        spaces: pUser.spaces
      })
    });
  }

  addUserFromGoogleLogin(pSignUpUser): Observable<any> {
    return new Observable(() => {
      this.fireDatabase.list('users').push({
        id: uuidv4(),
        userName: pSignUpUser.email,
        email: pSignUpUser.email
      })
    });
  }

  updateUser(pNode: string, 
    id: string, user: Partial<User>): Observable<void> {
    return from(this.fireDatabase.object(`${pNode}/${id}`)
    .update(user));
  }
}
