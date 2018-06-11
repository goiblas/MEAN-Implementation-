import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Task } from '../../models/task.model';
import { ApiProxyService } from './proxy/api-proxy.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {
tasks: Task[];
title: String;
sub: Subscription;
  constructor(private taskService: ApiProxyService) { }

  ngOnInit() {
    this.sub = this.taskService.getAllTasks().subscribe(
      tasks => {
        this.tasks = tasks;
      }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  addTask() {
    if (this.title !== '') {
      this.taskService.addTask({ title: this.title})
      .then( newtask => {
          this.title = '';
          this.tasks.push(newtask);
        });
    }
  }
  onComplete(taskId: string) {
    this.taskService.completeTask(taskId)
    .then(
      result => {
        this.tasks = this.tasks.map( task => {
          if (task._id === taskId) {
            task.done = true;
          }
          return task;
        });
      }
    );
  }
  onDelete(taskId: string) {
    this.taskService.deleteTask(taskId)
    .then( result => {
       this.tasks =  this.tasks.filter( task => task._id !== taskId);
    });
  }
}
