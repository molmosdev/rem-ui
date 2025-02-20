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
  computed,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { Option } from '../../../shared/components/option/option.component';
import {
  disabledStateTrigger,
  selectErrorRightButtonStateTrigger,
  selectErrorStateTrigger,
  fadeInFadeOutTrigger,
  inputPaddingStateTrigger,
  labelErrorStateTrigger,
  labelStateTrigger,
  rotateArrowTrigger,
  selectInputPaddingStateTrigger,
} from '../../../shared/animations/animations';

@Component({
  selector: 'r-select',
  imports: [NgClass],
  templateUrl: './select.component.html',
  animations: [
    fadeInFadeOutTrigger,
    selectErrorStateTrigger,
    labelErrorStateTrigger,
    selectErrorRightButtonStateTrigger,
    labelStateTrigger,
    inputPaddingStateTrigger,
    disabledStateTrigger,
    selectInputPaddingStateTrigger,
    rotateArrowTrigger,
  ],
  styleUrl: './select.component.css',
})
export class Select {
  /** The label for the select component. */
  label = input<string | undefined>(undefined);

  /** Indicates whether the select component is clearable. */
  clearable = input<boolean>(false);

  /** Indicates whether there is an error state. */
  error = input<boolean>(false);

  /** Indicates whether the dropdown is open. */
  isOpen = signal(false);

  /** The selected value. */
  selectedValue = model<string | null>(null);

  /** The index of the selected option. */
  selectedIndex = signal<number>(-1);

  /** The content of the selected option. */
  selectedContent = signal<string | null>(null);

  /** The index of the highlighted option. */
  highlightedIndex = signal<number>(-1);

  /** The list of options. */
  options = contentChildren(Option);

  /** The wrapper element for the options. */
  optionsWrapper = viewChild<ElementRef>('optionsWrapper');

  /** The last selected value. */
  lastSelectedValue: string | null = null;

  /** The maximum height of the options dropdown. */
  optionsMaxHeight = input<number>(200);

  /** Event emitted when the selected value changes. */
  changesEmitter = output<string | null>();

  /** The positioning of the dropdown ('up' or 'down'). */
  positioning = input<'up' | 'down'>('down');

  /** The message displayed when no results are found. */
  noResultsMessage = input<string>('No results found');

  /** The state of the label. */
  labelState = computed(() => (this.selectedContent() ? 'small' : 'normal'));

  /** The state of the input padding. */
  inputPaddingState = computed(() =>
    this.label() && this.selectedContent() ? 'small' : 'normal'
  );

  /** The displayed content of the selected option. */
  displayedSelectedContent = computed(() => this.selectedContent() || '');

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
   * @param index - The index of the option to scroll to.
   * @param behavior - The scroll behavior ('instant' or 'smooth').
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
   * @param option - The option to select.
   * @param index - The index of the option.
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
   * @param index - The index of the option to highlight.
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
   * @param event - The keyboard event.
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
   * @param direction - The direction to move the focus.
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
   * @param event - The mouse event.
   */
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }

  /**
   * Clear the current selection.
   * @param $event - The event object.
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
