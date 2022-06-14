import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
	selector: 'app-output-property',
	templateUrl: './output-property.component.html',
	styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

	@Input() value: number = 0;

	@Output() changeValue = new EventEmitter();

	// The "HTMLElement" can reference both HTML elements and Angular components
	// The name between the "" is the reference to the element's variable
	@ViewChild("inputField", {static: false}) fieldInputValue!: ElementRef;

	constructor() { }

	ngOnInit(): void {
	}

	increaseValue() {
		this.fieldInputValue.nativeElement.value++;
		console.log(this.fieldInputValue.nativeElement.value);
		
		this.changeValue.emit({newValue: this.value});
	}
	
	decreaseValue() {
		this.fieldInputValue.nativeElement.value--;
		console.log(this.fieldInputValue.nativeElement.value);

		this.changeValue.emit({newValue: this.value});
	}

}
