import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'my-task', pathMatch: 'full' },
  { path: 'my-task', loadChildren: () => import('./my-task/my-task.module').then(m => m.MyTaskModule) },
  { path: 'tasks-completed', loadChildren: () => import('./tasks-completed/tasks-completed.module').then(m => m.TasksCompletedModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
