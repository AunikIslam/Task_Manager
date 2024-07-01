import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, from, map } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Organization } from '../dto/organization';

@Injectable({ providedIn: 'root' })
export class BaseService {
  constructor(
    private fireDatabase: AngularFireDatabase,
    private fireAuth: AngularFireAuth
  ) {}

  addUser(): void {
    this.fireDatabase.list('users').push({
      name: 'Test',
      email: '@gmail',
      password: 'asdfghjkl',
    });
  }

  fetchData(pNode: string, pSearchValue: any, pSearchField: string): Observable<any[]> {
    return this.fireDatabase.list(pNode, ref => ref.orderByChild(pSearchField).equalTo(pSearchValue)).valueChanges();
  }

  getNumberOfOrganizations(pNode: string): Observable<number> {
    return this.fireDatabase.list(pNode).snapshotChanges().pipe(map(items => items.length));
  }

  getOrganizationsList(pNode: string): Observable<any[]> {
    return this.fireDatabase.list(pNode).snapshotChanges().pipe(map(items => items));
  }

  addOrganization(pOrganization: Organization): void {
    this.fireDatabase.list('organizations').push({
      orgName: pOrganization.name,
      address: pOrganization.address,
      phoneNumber: pOrganization.phoneNumber
    });
  }
}
