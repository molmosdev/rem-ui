import {
  afterRenderEffect,
  Component,
  contentChildren,
  input,
} from '@angular/core';
import { VerticalNavItem } from './components/vertical-nav-item/vertical-nav-item.component';
import { VerticalNavGroup } from './components/vertical-nav-group/vertical-nav-group.component';

@Component({
  selector: 'r-vertical-nav',
  standalone: true,
  templateUrl: './vertical-nav.component.html',
})
export class VerticalNav {
  extended = input<boolean>(true);
  items = contentChildren(VerticalNavItem);
  groups = contentChildren(VerticalNavGroup);
  extendedWidth = input<string>('200px');

  constructor() {
    afterRenderEffect(() => {
      document.documentElement.style.setProperty(
        '--vertical-nav-width',
        this.extendedWidth()
      );
      document.documentElement.style.setProperty(
        '--vertical-nav-collapsed-width',
        '64px'
      );
    });
  }
}
