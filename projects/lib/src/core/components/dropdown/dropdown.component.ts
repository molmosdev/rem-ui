import {
  Component,
  contentChild,
  effect,
  HostListener,
  signal,
} from '@angular/core';
import { DropdownTrigger } from './components/dropdown-trigger/dropdown-trigger.component';
import { DropdownContent } from './components/dropdown-content/dropdown-content.component';

@Component({
  selector: 'r-dropdown',
  standalone: true,
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class Dropdown {
  toggle = signal<boolean>(false);
  dropdownTrigger = contentChild<DropdownTrigger>(DropdownTrigger);
  dropdownContent = contentChild<DropdownContent>(DropdownContent);

  constructor() {
    effect(() => {
      this.setTriggerRect();
      this.listenDropdownTriggerEvents();
      this.listenDropdownContentEvents();
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setTriggerRect();
  }

  /**
   * Set the trigger rect
   */
  setTriggerRect(): void {
    this.dropdownContent()?.setTriggerRect(
      this.dropdownTrigger()?.el.getBoundingClientRect()
    );
  }

  /**
   * Switch the dropdown toggle
   *
   * @param {boolean} open
   */
  switchToggle(open: boolean): void {
    this.toggle.set(open);
    this.dropdownContent()?.isDropdownContentVisible.set(open);
  }

  /**
   * Listen for dropdown trigger events
   */
  listenDropdownTriggerEvents(): void {
    this.dropdownTrigger()?.triggerEmitter.subscribe(() => {
      this.switchToggle(!this.toggle());
    });
  }

  /**
   * Listen for dropdown content events
   */
  listenDropdownContentEvents(): void {
    this.dropdownContent()?.closeEmitter.subscribe(() => {
      this.switchToggle(false);
    });
  }
}
