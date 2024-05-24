import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Task } from '../../dto/task';
@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnChanges {
  @Input() task!: Task;
  @Output() updateStatus = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['task']) {
      console.log('Task received:', this.task);
    }
  }

  changeStatus(): void {
    this.task.completed = !this.task.completed;
    this.updateStatus.emit(this.task);
  }

  removeTask(): void {
    this.deleteTask.emit(this.task.id);
  }
}
