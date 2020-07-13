import { Component, OnInit } from '@angular/core';
import { task } from 'src/models/task.model';
import { MatDialog } from '@angular/material/dialog';
import { FormTaskComponent } from '../form-task/form-task.component';
import { TaskService } from 'src/services/task.service';
import { filter } from "rxjs/operators";

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.css']
})
export class MyTaskComponent implements OnInit {

  listTask:task[] = []; 
  constructor(
    public dialog: MatDialog,
    private taskService: TaskService 
  ) { }

  ngOnInit(): void {
    this.taskService.listTask
    .subscribe(item => this.listTask = item);
  }

  createTask() {
    const dialogRef = this.dialog.open( FormTaskComponent, {
      width: '500px',
      data: null
    });
  }

  editTask(taskEdit: task, index: number) {
    const dialogRef = this.dialog.open( FormTaskComponent, {
      width: '500px',
      data: { edit: true, task: taskEdit, index: index}
    });
  }
}
