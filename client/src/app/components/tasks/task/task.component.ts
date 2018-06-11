import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent implements OnInit {
@Input() task: Task;
@Output() complete = new EventEmitter<String>();
@Output() delete = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }

  onComplete() {
    this.complete.emit(this.task._id);
  }
  onDelete() {
    this.delete.emit(this.task._id);
  }
}
