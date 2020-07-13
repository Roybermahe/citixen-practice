import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksCompletedRoutingModule } from './tasks-completed-routing.module';
import { TasksCompletedComponent } from './tasks-completed.component';
import { angularMaterialModule } from '../AngularMaterial.module';
import { mySharedModule } from '../myShared.module';


@NgModule({
  declarations: [TasksCompletedComponent],
  imports: [
    CommonModule,
    angularMaterialModule,
    mySharedModule,
    TasksCompletedRoutingModule,
   
  ],
  exports: [],
  entryComponents: [
  ],
  bootstrap: [TasksCompletedComponent]
})
export class TasksCompletedModule { }
