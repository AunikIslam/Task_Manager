import { Pipe, PipeTransform } from '@angular/core';
import { getEnumSelector } from '../utilities/utilites';
import { StatusEnum } from '../enums/task-status';

@Pipe( { name: 'status' } )
export class StatusPipe implements PipeTransform {

    statusList = getEnumSelector(StatusEnum)
    
    transform( pStatus: string ): string {
        return this.statusList.filter(pItem => pItem.value == pStatus)[0].title
    }
}
