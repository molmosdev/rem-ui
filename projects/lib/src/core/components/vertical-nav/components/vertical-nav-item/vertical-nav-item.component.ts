import { Component, input } from '@angular/core';

@Component({
  selector: 'r-vertical-nav-item',
  standalone: true,
  imports: [],
  templateUrl: './vertical-nav-item.component.html',
  styleUrl: './vertical-nav-item.component.css',
  host: {
    '[class.active]': 'active()',
    '[class.disabled]': 'disabled()',
    '[attr.role]': '"button"',
    '[attr.tabindex]': 'disabled() ? -1 : 0',
  },
})
export class VerticalNavItem {
  readonly active = input<boolean>(false);
  readonly disabled = input<boolean>(false);
}
