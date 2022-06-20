import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: 'p[appYellowBackground]'
})
export class YellowBackgroundDirective {

    constructor(
        private _elementRef: ElementRef,
        private _renderer: Renderer2) {
        // console.log(this._elementRef);
        // this._elementRef.nativeElement.style.backgroundColor = "yellow";

        this._renderer.setStyle(_elementRef.nativeElement, "background-color", "yellow");
    }

}
