import { Component, OnInit } from '@angular/core';
import { Students } from '../classes/students';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  selectedStudent?: Students;

  constructor(public studentSrv: StudentsService) { }

  ngOnInit(): void {
    this.getAllStudents();

  }

  getAllStudents(): void {
    this.studentSrv.getStudents();
  }


  getDetails(student: Students): void {
    this.selectedStudent = student;
  }
}
