import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../dto/task';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() updateStatus = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<number>();

  changeStatus(): void {
    this.task.completed = !this.task.completed;
    this.updateStatus.emit(this.task);
  }

  removeTask(): void {
    this.deleteTask.emit(this.task.id);
  }
}
