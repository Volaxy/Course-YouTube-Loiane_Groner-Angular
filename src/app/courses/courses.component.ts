import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

	url: string = "http://loiane.com";
	urlImage: string = "http://lorempixel.com.br/800/600/?2";

	constructor() {	}

	ngOnInit(): void {
	}

	getValue() {
		return 1;
	}

}
