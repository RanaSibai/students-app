import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
    {
        path: 'student',
        children: [
            {
                path: '',
                component: StudentsComponent
            },
            {
                path: 'details/:id',
                component: StudentDetailsComponent,
                outlet: 'student-details'
            }
        ]

    },
    {
        path: '',
        redirectTo: 'student',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'student',
        pathMatch: 'full'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
