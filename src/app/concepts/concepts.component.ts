import { Component } from '@angular/core';

@Component({
    selector: 'app-concepts',
    templateUrl: './concepts.component.html',
    styleUrls: ['./concepts.component.css']
})
export class ConceptsComponent {

    task: any = {
        desc: "Task description",
        responsible: null
        // responsible: {name: 'Loiane'}
    }

    constructor() { }

}
