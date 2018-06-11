import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../../../models/task.model';
import { environment } from './../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiProxyService {

  constructor(private http: HttpClient) {
  }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiUrl}/tasks`);
  }

  addTask(newTask: Task) {
    return this.http.post<Task>(`${environment.apiUrl}/tasks`, newTask).toPromise();
  }

  deleteTask(id: String) {
    return this.http.delete(`${environment.apiUrl}/tasks/${id}`).toPromise();
  }
  completeTask(id: String) {
    return this.http.put(`${environment.apiUrl}/tasks/${id}/done`, {done: true}).toPromise();
  }
}
