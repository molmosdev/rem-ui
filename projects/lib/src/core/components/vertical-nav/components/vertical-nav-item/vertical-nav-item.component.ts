import { Component, input } from '@angular/core';

@Component({
  selector: 'r-vertical-nav-item',
  standalone: true,
  imports: [],
  templateUrl: './vertical-nav-item.component.html',
  styleUrl: './vertical-nav-item.component.css',
})
export class VerticalNavItem {
  active = input<boolean>(false);
  disabled = input<boolean>(false);
}
