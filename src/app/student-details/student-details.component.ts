import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Students } from '../classes/students';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  selectedStudent!: Students;

  constructor(private studentSrv: StudentsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (this.studentSrv.students.length === 0) {
      this.router.navigate(['/student'])
    } else {
      this.route.params.subscribe(() => {
        this.selectedStudent = this.studentSrv.students.find((student) => this.route.snapshot.paramMap.get('id') === student.id) as Students;
      });
    }
  }
}