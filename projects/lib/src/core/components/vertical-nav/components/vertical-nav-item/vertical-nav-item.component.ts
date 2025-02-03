import { Component, input } from '@angular/core';

@Component({
  selector: 'r-vertical-nav-item',
  standalone: true,
  imports: [],
  templateUrl: './vertical-nav-item.component.html',
})
export class VerticalNavItem {
  active = input<boolean>(false);
  disabled = input<boolean>(false);
}
