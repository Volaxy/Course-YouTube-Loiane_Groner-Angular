import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

	currentValue: string = "";
	savedValue: string = "";
	isMouseOver: boolean = false;

	constructor() {	}

	ngOnInit(): void {
	}

	clickedButton() {
		alert("Button clicked!");
	}

	onKeyUp(event: KeyboardEvent) {
		this.currentValue = (<HTMLInputElement> event.target).value;
	}

	saveValue(value: string) {
		this.savedValue = value;
	}
	
	onMouseOverOut() {
		this.isMouseOver = !this.isMouseOver;
	}

}
