import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { getEnumSelector } from '../utilities/utilites';
import { StatusEnum } from '../enums/task-status';
import { UserRoleEnum } from '../enums/user-roles';

@Pipe( { name: 'userRole' } )
export class UserRolePipe implements PipeTransform {

    statusList = getEnumSelector(UserRoleEnum)
    
    transform( pStatus: string ): string {
        return this.statusList.filter(pItem => pItem.value == pStatus)[0].title
    }
}
