import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: "courses",
    template: `
    <button (click)="activate()" [style.backgroundColor]="isActive ? 'black' : 'green'" class="btn btn-primary" [class.active]="isActive">Click here</button>
    `
})
export class CoursesComponent {
    // title = "List of courses";
    // courses;

    // constructor(service: CoursesService) {
    //     this.courses = service.getCourses()
    // }
    isActive = false
    activate() {
        this.isActive = !this.isActive
    }
}