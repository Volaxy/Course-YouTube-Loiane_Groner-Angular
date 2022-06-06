import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

	// We can set the value of the variable through the declaration itself or in the constructor
	siteName: string;

	courses: string[] = ["Java", "Ext JS", "Angular"];

	constructor() {
		this.siteName = "http://loiane.training";
	}

	ngOnInit(): void {
	}

}
