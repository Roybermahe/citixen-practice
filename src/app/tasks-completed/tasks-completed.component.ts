import { Component, OnInit, OnDestroy } from '@angular/core';
import { task } from 'src/models/task.model';
import { TaskService } from 'src/services/task.service';

@Component({
  selector: 'app-tasks-completed',
  templateUrl: './tasks-completed.component.html',
  styleUrls: ['./tasks-completed.component.css']
})
export class TasksCompletedComponent implements OnInit {
  listTask:task[] = [];
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskService.listTask
    .subscribe(item => this.listTask = item.filter(item => item.state == true));
  }

  removeAll() {
    this.taskService.clearList();
  }
}
