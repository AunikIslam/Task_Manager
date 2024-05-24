import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Task } from "../dto/task";

@Injectable({
    providedIn: 'root'
  })

  export class TaskService {
    private taskListSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(this.getTasksFromLocalStorage());
    sharedTaskList = this.taskListSubject.asObservable();

    private taskSubject = new BehaviorSubject(Task);
    sharedTaskSubject = this.taskSubject.asObservable();

    getTasks() {
      return this.taskListSubject.asObservable();
    }

    getTasksFromLocalStorage(): Task[] {
      const tasks = localStorage.getItem('tasks');
      return tasks ? JSON.parse(tasks) : [];
    }

    saveTasksToLocalStorage(tasks: Task[]): void {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }


    addTask(pTask: Task): void {
        const tasks = [...this.taskListSubject.value, new Task(pTask)]
        this.taskListSubject.next(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    updateTask(task: Task) {
      const tasks = this.taskListSubject.value.map(pTask => pTask.id === task.id ? task : pTask);
      this.taskListSubject.next(tasks);
      this.saveTasksToLocalStorage(tasks);
    }
  
    deleteTask(taskId: string) {
      const tasks = this.taskListSubject.value.filter(t => t.id !== taskId);
      this.taskListSubject.next(tasks);
      this.saveTasksToLocalStorage(tasks);
    }
  }