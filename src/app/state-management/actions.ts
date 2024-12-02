import { createAction, props } from '@ngrx/store';
import { TaskV2 } from '../dto/task-v2';

export const addTask = createAction('[Task] Add Task', props<{task: TaskV2}>());
export const loadTask = createAction('[Task] Load Tasks', props<{tasks: TaskV2[]}>());
export const loadRedditContents = createAction('[RedditContents] Load Reddit Contents', props<{contents: any[]}>());