import { Component, OnInit, Input } from '@angular/core';
import { task } from '../../models/task.model'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: task;
  constructor() { }

  ngOnInit(): void {
  }

}
