import { Component, ElementRef, input, output } from '@angular/core';

@Component({
  selector: 'r-dropdown-trigger',
  templateUrl: './dropdown-trigger.component.html',
})
export class DropdownTrigger {
  disabled = input<boolean>(false);
  triggerEmitter = output<void>();
  el: any;

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }
}
