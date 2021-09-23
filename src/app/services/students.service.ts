import { Injectable } from '@angular/core';
import { Students } from '../classes/students';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students: Students[] = [];
  average: number = 0;
  selectedStudent?: Students;

  constructor() { }

  getStudents(): void {
    fetch('https://jsonblob.com/api/e4fa1453-000a-11ec-a42f-0f8ae652f544')
      .then(res => res.json())
      .then(json => {
        let sum = 0;
        for (let i = 0; i < json.length; i++) {
          const student = new Students(json[i]._id, json[i].name, json[i].grade, json[i].email, json[i].age, json[i].phone, json[i].gender);
          this.students.push(student);

          sum += student.grade;
        }
        this.average = Number((sum / this.students.length).toFixed(2));
      });
  }
}