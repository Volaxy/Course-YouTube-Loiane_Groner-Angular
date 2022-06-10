import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'] //,
  // This is also used to expose component property
  //inputs: ["courseName: name"]
})
export class InputPropertyComponent implements OnInit {

  // The "@Input()" exposes the property present in the ".ts" file of the component in which it is being declared, to be accessible through other components
  // The value between the "()" is the name that will be used to reference the component's property outside of it
  @Input("name") CourseName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
