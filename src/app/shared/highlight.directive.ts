import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

    @HostListener("mouseenter") onMouseOver() {
        this.backgroundColor = this.highlightColor;
    }

    @HostListener("mouseleave") onMouseExit() {
        this.backgroundColor = this.defaultColor;
    }

    @HostBinding("style.backgroundColor") backgroundColor: string = "";

    @Input() defaultColor: string = "white";
    @Input() highlightColor: string = "yellow";

    constructor() { }

    ngOnInit() {
        this.backgroundColor = this.defaultColor;
    }

}
