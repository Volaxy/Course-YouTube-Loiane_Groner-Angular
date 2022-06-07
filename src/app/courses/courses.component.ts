import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

	name: string = "abc";

	person: any = {
		name: "ex",
		age: 5
	}

	constructor() {	}

	ngOnInit(): void {
	}

}
