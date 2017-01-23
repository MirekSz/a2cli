import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective {

    constructor(private el: ElementRef) {
    }

    @Input('highlight') highlightColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || 'red');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.color = color;
    }
}
