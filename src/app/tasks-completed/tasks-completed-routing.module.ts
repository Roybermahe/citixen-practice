import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksCompletedComponent } from './tasks-completed.component';

const routes: Routes = [{ path: '', component: TasksCompletedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksCompletedRoutingModule { }
