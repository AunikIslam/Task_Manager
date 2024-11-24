import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TaskV2 } from '../../../dto/task-v2';
import { selectedTasks } from '../../../state-management/selectors';
import { addTask, loadTask } from '../../../state-management/actions';

@Component({
  selector: 'app-task-v2-list',
  standalone: true,
  imports: [],
  templateUrl: './task-v2-list.component.html',
  styleUrl: './task-v2-list.component.css'
})
export class TaskV2ListComponent implements OnInit {
  tasks$: Observable<TaskV2[]>
  constructor(private store: Store) {
    this.tasks$ = this.store.select(selectedTasks);
  }

  ngOnInit(): void {
    
  }

  addNewTask() {
    const task: TaskV2 = {
      id: Math.random().toString(),
      title: 'Task 1',
      completed: false,
    };
    this.store.dispatch(addTask({ task }));
  }
}