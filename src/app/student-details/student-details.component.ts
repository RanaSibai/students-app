import { Component, Input, OnInit } from '@angular/core';
import { Students } from '../classes/students';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input() selectedStudent?: Students;

  constructor() { }

  ngOnInit(): void {
  }

  removeDetails = (): void => {
    this.selectedStudent = undefined;

  }
}
