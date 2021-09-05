import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsService } from './services/students.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
