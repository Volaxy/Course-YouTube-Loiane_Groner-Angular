import { Component, OnInit } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

	// We can set the value of the variable through the declaration itself or in the constructor
	siteName: string;

	courses: string[];

	// The service is declarated in the code to will be ready to use
	// The "private" says the variable is used only this class
	constructor(private coursesService: CoursesService) {
		this.siteName = "http://loiane.training";

		this.courses = this.coursesService.getCourses();
	}

	ngOnInit(): void {
	}

}
