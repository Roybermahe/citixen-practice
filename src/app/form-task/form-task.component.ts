import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { colorTap } from 'src/types/colorTap.type';
import { task } from 'src/models/task.model';
import { TaskService } from "../../services/task.service";
@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent implements OnInit {

  task: task = { color: 'none', state: false, title: '', description: '' };
  listColor: colorTap[] = ['blue', 'green', 'yellow', 'purple', 'red', 'none']
  constructor(
    public dialogRef: MatDialogRef<FormTaskComponent>,
    private taskService: TaskService,
    @Inject(MAT_DIALOG_DATA) public data: editTask | null
  ) {
    data != null ? this.task = data.task : null;
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.data != null) {
      this.task.state = true;
      this.taskService.completeTask(this.task, this.data.index);
    } else {
      this.taskService.createTask(this.task);
    }
  }

  editTask() {
    this.taskService.completeTask(this.task, this.data.index);
  }

  deleteTask() {
    this.taskService.removeTask(this.data.index);
  }

  changeColor(color: colorTap) {
    this.task.color = color;
  }
}

interface editTask {
  edit: boolean;
  task: task;
  index: number;
}
