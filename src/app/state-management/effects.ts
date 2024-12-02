import { Injectable } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { BaseService } from '../services/service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadRedditContents } from './actions';

@Injectable({
    providedIn: 'root'
})

export class Effects {
    filters = {
        limit: 15,
        t: 2023
      };
      api = 'https://www.reddit.com/r/Wallstreetbets/top.json';
    constructor(private action: Actions, private service: BaseService) {

    }

    loadContents = createEffect(() => 
        this.action.pipe(
            ofType(loadRedditContents),
            mergeMap(() => this.service.getData(this.api, this.filters).pipe(
                map(contents => loadRedditContents(contents['data']['children']))
            ))
        )
    )
}