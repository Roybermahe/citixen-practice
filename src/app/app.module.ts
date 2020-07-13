import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { angularMaterialModule } from './AngularMaterial.module';
import { mySharedModule } from "./myShared.module";
import { FormTaskComponent } from './form-task/form-task.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    angularMaterialModule,
    mySharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
