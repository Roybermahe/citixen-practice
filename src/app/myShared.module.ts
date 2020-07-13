import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from "../app/task/task.component";
import { angularMaterialModule } from './AngularMaterial.module';
import { FormTaskComponent } from './form-task/form-task.component';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, FormsModule, angularMaterialModule],
    declarations: [TaskComponent, FormTaskComponent],
    exports: [TaskComponent, FormTaskComponent]
})
export class mySharedModule { }
