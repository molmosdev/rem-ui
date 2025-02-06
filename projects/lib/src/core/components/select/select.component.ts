import {
  Component,
  HostListener,
  signal,
  effect,
  contentChildren,
  viewChild,
  model,
  ElementRef,
  input,
  output,
} from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { Option } from '../../../shared/components/option/option.component';
import { fadeInFadeOutTrigger } from '../../../shared/animations/animations';

@Component({
  selector: 'r-select',
  imports: [NgStyle, NgClass],
  templateUrl: './select.component.html',
  animations: [fadeInFadeOutTrigger],
  styleUrl: './select.component.css',
})
export class Select {
  label = input<string | undefined>(undefined);
  clearable = input<boolean>(false);
  error = input<boolean>(false);
  isOpen = signal(false);
  selectedValue = model<string | null>(null);
  selectedIndex = signal<number>(-1);
  selectedContent = signal<string | null>(null);
  highlightedIndex = signal<number>(-1);
  options = contentChildren(Option);
  optionsWrapper = viewChild<ElementRef>('optionsWrapper');
  lastSelectedValue: string | null = null;
  optionsMaxHeight = input<number>(200);
  changesEmitter = output<string | null>();
  positioning = input<'up' | 'down'>('down');
  noResultsMessage = input<string>('No results found');

  constructor(private elementRef: ElementRef) {
    effect(() => {
      if (this.optionsWrapper()) {
        this.handleScrollToSelectedOptionOnOpen();
        this.handleOptionSelection();
      }
      this.handleExternalSelectedValue();
    });
  }

  /**
   * Scroll to the selected option when the dropdown is opened.
   */
  handleScrollToSelectedOptionOnOpen() {
    if (this.selectedIndex() !== -1) {
      this.scrollToOption(this.selectedIndex(), 'instant');
    }
  }

  /**
   * Scroll to a specific option in the dropdown.
   * @param {number} index - The index of the option to scroll to.
   * @param {string} behavior - The scroll behavior ('instant' or 'smooth').
   */
  scrollToOption(index: number, behavior: string): void {
    const optionElements = this.options();
    if (optionElements[index]) {
      optionElements[index].el.nativeElement.scrollIntoView({
        block: 'nearest',
        behavior: behavior,
      });
    }
  }

  /**
   * Handle the selection of an option.
   */
  handleOptionSelection(): void {
    this.options().forEach((option, index) => {
      option.selectEmitter.subscribe(optionEmitted => {
        this.selectOption(optionEmitted, index);
        this.highlightOption(index);
        this.handleOptionsStates();
        this.isOpen.set(false);
      });
    });
  }

  /**
   * Select an option.
   * @param {Option} option - The option to select.
   * @param {number} index - The index of the option.
   */
  selectOption(option: Option, index: number): void {
    this.selectedValue.set(option.value());
    this.lastSelectedValue = option.value();
    this.selectedContent.set(option.el.nativeElement.innerText.trim());
    this.selectedIndex.set(index);
    this.changesEmitter.emit(option.value());
  }

  /**
   * Highlight an option.
   * @param {number} index - The index of the option to highlight.
   */
  highlightOption(index: number) {
    this.highlightedIndex.set(index);
  }

  /**
   * Handle the states of the options.
   */
  handleOptionsStates(): void {
    this.options().forEach((option, index) => {
      option.selected.set(index === this.selectedIndex());
      option.highlighted.set(index === this.highlightedIndex());
    });
  }

  /**
   * Handle the external selected value.
   */
  handleExternalSelectedValue(): void {
    if (this.lastSelectedValue !== this.selectedValue()) {
      if (this.selectedValue()) {
        const selectedOptionIndex = this.options().findIndex(
          option => option.value() === this.selectedValue()
        );
        if (selectedOptionIndex !== -1) {
          this.selectOption(
            this.options()[selectedOptionIndex],
            selectedOptionIndex
          );
          this.highlightOption(selectedOptionIndex);
          this.handleOptionsStates();
        }
      } else {
        this.selectedValue.set(null);
        this.lastSelectedValue = null;
        this.selectedContent.set(null);
        this.selectedIndex.set(-1);
        this.changesEmitter.emit(null);
        this.highlightOption(-1);
        this.handleOptionsStates();
      }
    }
  }

  /**
   * Handle keyboard events for navigation and selection.
   * @param {KeyboardEvent} event - The keyboard event.
   */
  @HostListener('keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.focusOption('next');
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.focusOption('previous');
        break;
      case 'Enter':
        event.preventDefault();
        this.isOpen() ? this.selectFocusedOption() : this.isOpen.set(true);
        break;
      case 'Escape':
        event.preventDefault();
        this.isOpen.set(false);
        break;
      case 'Tab':
        if (this.isOpen()) {
          event.preventDefault();
          this.isOpen.set(false);
        }
        break;
    }
  }

  /**
   * Focus on the next or previous option.
   * @param {'next' | 'previous'} direction - The direction to move the focus.
   */
  focusOption(direction: 'next' | 'previous') {
    let index = this.highlightedIndex();
    const increment = direction === 'next' ? 1 : -1;

    index += increment;
    while (
      index >= 0 &&
      index < this.options().length &&
      this.options()[index].disabled()
    ) {
      index += increment;
    }

    if (index >= 0 && index < this.options().length) {
      this.highlightOption(index);
      this.handleOptionsStates();
      this.scrollToOption(this.highlightedIndex(), 'smooth');
    }
  }

  /**
   * Select the currently focused option.
   */
  selectFocusedOption() {
    this.selectOption(
      this.options()[this.highlightedIndex()],
      this.highlightedIndex()
    );
    this.handleOptionsStates();
    this.isOpen.set(false);
  }

  /**
   * Handle focus event to open the dropdown.
   */
  @HostListener('focus')
  handleFocus(): void {
    this.isOpen.set(true);
  }

  /**
   * Handle blur event to close the dropdown.
   */
  @HostListener('blur')
  handleBlur(): void {
    this.isOpen.set(false);
  }

  /**
   * Handle click outside the component to close the dropdown.
   * @param {MouseEvent} event - The mouse event.
   */
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }

  /**
   * Clear the current selection.
   * @param {any} $event - The event object.
   */
  clearSelection($event: any): void {
    this.selectedIndex.set(-1);
    this.selectedValue.set(null);
    this.selectedContent.set(null);
    this.highlightedIndex.set(-1);
    this.isOpen.set(false);
    this.handleOptionsStates();
    $event.stopPropagation();
  }
}
