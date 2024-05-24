import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Task } from "../dto/task";

@Injectable({
    providedIn: 'root'
  })

  export class TaskService {
    tasks: Task[] = [];
    private tasksListSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(this.getTasksFromLocalStorage());
    sharedTaskList = this.tasksListSubject.asObservable();

    private taskSubject = new BehaviorSubject(Task);
    sharedTaskSubject = this.taskSubject.asObservable();

    getTasks() {
      return this.tasksListSubject.asObservable();
    }

    getTasksFromLocalStorage(): Task[] {
      const tasks = localStorage.getItem('tasks');
      return tasks ? JSON.parse(tasks) : [];
    }


    addTask(pTask: Task): void {
        const tasks = [...this.tasksListSubject.value, pTask]
        this.tasksListSubject.next(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }