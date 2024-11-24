import { State, createReducer, on } from "@ngrx/store";
import { addTask, loadTask } from "./actions";
import { TaskV2 } from "../dto/task-v2";
import { state } from "@angular/animations";

export const initialState: TaskV2[] = [];

export const taskReducer = createReducer(
    initialState, 
    on(addTask, (state, {task}) => [...state, task]),
    on(loadTask, (state, {tasks}) => [...tasks])
    )