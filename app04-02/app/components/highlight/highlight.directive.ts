import { Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[bgHighlight]'
})
export class HighlightDirective {
  private _defaultColor = "blue";
  private element: HTMLElement;

  @Input('bgHighlight') highlightColor: string;

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  ngOnInit() {
    this.highlight(this.highlightColor);
  }

  ngOnChanges() {
    this.highlight(this.highlightColor);
  }

  private highlight(color: string) {
    this.element.style.backgroundColor = color || this._defaultColor;
  }
}
