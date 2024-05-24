import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Task } from "../dto/task";

@Injectable({
    providedIn: 'root'
  })

  export class TaskService {
    tasks: Task[] = [];
    private tasksListSubject = new BehaviorSubject(this.tasks);
    sharedTaskList = this.tasksListSubject.asObservable();

    private taskSubject = new BehaviorSubject(Task);
    sharedTaskSubject = this.taskSubject.asObservable();


    addTask(pTask: Task): void {
        const tasks = [...this.tasksListSubject.value, pTask]
        this.tasksListSubject.next(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }