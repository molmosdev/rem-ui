import { Component, contentChildren, model } from '@angular/core';
import { expandCollapseTrigger } from './vertical-nav-group.animations';
import { rotateArrowTrigger } from '../../../../../shared/animations/animations';

@Component({
  selector: 'r-vertical-nav-group',
  standalone: true,
  imports: [],
  templateUrl: './vertical-nav-group.component.html',
  styleUrl: './vertical-nav-group.component.css',
  animations: [expandCollapseTrigger, rotateArrowTrigger],
})
export class VerticalNavGroup {
  readonly groups = contentChildren(VerticalNavGroup);
  readonly expanded = model<boolean>(false);

  /**
   * Toggle the expanded state of the sidebar
   */
  toggleExpandedState(): void {
    this.expanded.set(!this.expanded());
    if (!this.expanded()) {
      this.groups().forEach(group => {
        this.setRecursiveGroupsState(group);
      });
    }
  }

  /**
   * Set the state of the sidebar recursively
   * @param {VerticalNavGroup} group - The group to set the state for
   */
  private setRecursiveGroupsState(group: VerticalNavGroup): void {
    group.expanded.set(false);
    group.groups().forEach(nestedGroup => {
      this.setRecursiveGroupsState(nestedGroup);
    });
  }
}
