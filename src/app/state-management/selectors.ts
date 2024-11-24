import { createSelector } from '@ngrx/store';
import { TaskV2 } from '../dto/task-v2';

export const selectedTasks = (state: any) => state.tasks;