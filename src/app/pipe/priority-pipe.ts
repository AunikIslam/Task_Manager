import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { getEnumSelector } from '../utilities/utilites';
import { StatusEnum } from '../enums/task-status';
import { PriotiresEnum } from '../enums/priorites';

@Pipe( { name: 'prioirity' } )
export class PriorityPipe implements PipeTransform {

    statusList = getEnumSelector(PriotiresEnum)
    
    transform( pStatus: string ): string {
        return this.statusList.filter(pItem => pItem.value == pStatus)[0].title
    }
}
