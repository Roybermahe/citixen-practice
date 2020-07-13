import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTaskRoutingModule } from './my-task-routing.module';
import { MyTaskComponent } from './my-task.component';
import { angularMaterialModule } from '../AngularMaterial.module';
import { mySharedModule } from '../myShared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MyTaskComponent],
  imports: [
    FormsModule,
    CommonModule,
    angularMaterialModule,
    mySharedModule,
    MyTaskRoutingModule
  ],
  exports: [],
  entryComponents: [
  ],
  bootstrap: [MyTaskComponent]
})
export class MyTaskModule { }
