import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-output-property',
	templateUrl: './output-property.component.html',
	styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

	@Input() value: number = 0;

	// The "EventEmitter" is an object which allow the variable will be send to the father component
	// The "Output()" sends the variable to the parent component
	@Output() changeValue = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}

	increaseValue() {
		this.value++;
		this.changeValue.emit({newValue: this.value});
	}
	
	decreaseValue() {
		this.value--;
		this.changeValue.emit({newValue: this.value});
	}

}
