import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { task } from 'src/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _tasks = new BehaviorSubject<task[]>([]);
  private dataStore: { tasks: task[] } = { tasks: [] };
  readonly listTasks = this._tasks.asObservable();
  constructor(

  ) { }

  get listTask() {
    this.dataStore.tasks = localStorage.getItem('task') == null ? [] : JSON.parse(localStorage.getItem('task'));
    this.updateList();
    return this._tasks.asObservable();
  }

  public createTask(task: task) {
    this.dataStore.tasks.push(task);
    this.updateList();
  }

  public completeTask(task: task, index: number) {
    this.dataStore.tasks[index] = task;
    this.updateList();
  }

  public removeTask(index: number) {
    this.dataStore.tasks.splice(index, 1);
    this.updateList();
  }

  public clearList() {
    this.dataStore.tasks = this.dataStore.tasks.filter(item => item.state != true);
    this.updateList();
  }
  
  private updateList() {
    this._tasks.next(Object.assign({}, this.dataStore).tasks);
    localStorage.setItem('task', JSON.stringify(this.dataStore.tasks));
  }
}
