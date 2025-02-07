import { Component, contentChildren, input } from '@angular/core';
import { VerticalNavItem } from '../vertical-nav-item/vertical-nav-item.component';

@Component({
  selector: 'r-vertical-nav-section',
  standalone: true,
  imports: [],
  templateUrl: './vertical-nav-section.component.html',
  styleUrl: './vertical-nav-section.component.css',
})
export class VerticalNavSection {
  title = input<string>();
  items = contentChildren(VerticalNavItem);
}
