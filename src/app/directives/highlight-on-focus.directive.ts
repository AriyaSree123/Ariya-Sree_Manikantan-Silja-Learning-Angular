import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {
  @Input() appHighlightOnFocus='';

  constructor(private el: ElementRef) { }
  @HostListener('focus') onFocus(){
    this.highlight(this.appHighlightOnFocus);
  }
  @HostListener('blur') onBlur(){
    this.highlight(null);
  }
  private highlight(color:string | null){
    this.el.nativeElement.style.backgroundColor=color;
  }

}
