import {
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  input,
  model,
  output,
  signal,
  viewChild,
  OnInit,
  Directive,
  Renderer2,
  AfterViewInit,
  effect,
} from '@angular/core';
import { Icon } from '../icon/icon.component';

/**
 * Represents an option within a select element.
 */
export interface Option {
  value: string;
  text: string;
  disabled?: boolean;
}

/**
 * A directive that provides options for a select element.
 */
@Directive({
  selector: 'select[r-options]',
})
export class OptionsDirective implements OnInit {
  /**
   * The options available for selection.
   */
  readonly options = input<Option[]>();

  /**
   * Reference to the host element.
   */
  private readonly el = inject(ElementRef);

  /**
   * Reference to the renderer.
   */
  private readonly renderer = inject(Renderer2);

  /**
   * Initializes the options based on the provided input
   */
  ngOnInit(): void {
    this.updateOptions();
    console.log('OptionsDirective');
  }

  /**
   * Updates the options based on the provided input.
   */
  private updateOptions(): void {
    const selectElement = this.el.nativeElement as HTMLSelectElement;
    selectElement.innerHTML = '';

    this.options()?.forEach(option => {
      const optionElement = this.renderer.createElement('option');
      this.renderer.setProperty(optionElement, 'value', option.value);
      this.renderer.setProperty(optionElement, 'textContent', option.text);
      if (option.disabled) {
        this.renderer.setProperty(optionElement, 'disabled', true);
      }
      this.renderer.appendChild(selectElement, optionElement);
    });
  }
}

/**
 * A custom select component that provides enhanced styling and control over native select elements.
 */
@Component({
  selector: 'r-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
  imports: [Icon, OptionsDirective],
  host: {
    '[class.invalid]': 'invalid()',
    '[class.disabled]': 'disabled()',
    '[style.max-width]': 'maxWidth()',
    '[class.active-with-label]': 'isActiveState() && label()',
  },
  standalone: true,
})
export class Select implements AfterViewInit {
  /**
   * The label associated with the select component.
   */
  readonly label = input<string>();

  /**
   * The placeholder text displayed when no option is selected.
   */
  readonly placeholder = input('');

  /**
   * The maximum width of the select component.
   */
  readonly maxWidth = input('');

  /**
   * An optional suffix to display within the select button.
   */
  readonly suffix = input<string>();

  /**
   * The options available for selection.
   */
  readonly options = input<Option[]>([]);

  /**
   * The selected value of the select component.
   */
  selectedValue = model<string | null>(null);

  /**
   * Indicates whether the select component is in an invalid state.
   */
  invalid = model(false);

  /**
   * Indicates whether the select component is disabled.
   */
  disabled = model(false);

  /**
   * Emits the new value when the selection changes.
   */
  valueChange = output<string | number | null>();

  /**
   * Indicates whether the options dropdown is open.
   */
  isOpen = signal(false);

  /**
   * The text of the currently selected option.
   */
  selectedOptionText = signal<string>('');

  /**
   * Reference to the native select element.
   */
  private readonly select = viewChild<ElementRef<HTMLSelectElement>>('select');

  /**
   * Reference to the button element that triggers the options dropdown.
   */
  private readonly button = viewChild<ElementRef<HTMLButtonElement>>('button');

  /**
   * Computed property indicating whether the select component is in an active state (i.e., has a value or placeholder).
   */
  protected readonly isActiveState = computed(
    () => !!this.selectedValue() || !!this.placeholder()
  );

  /**
   * Reference to the host element.
   */
  private readonly elementRef = inject(ElementRef);

  /**
   * Initializes the selected text based on the initial value.
   */
  ngAfterViewInit(): void {
    this.initializeSelectedText();
  }

  /**
   * Sets the `selectedOptionText` based on the initial value.
   */
  private initializeSelectedText(): void {
    const initialValue = this.selectedValue();
    if (!initialValue) return;

    const option = Array.from(this.select()?.nativeElement.options || []).find(
      opt => opt.value === initialValue
    );

    this.selectedOptionText.set(option?.textContent || '');
  }

  /**
   * Shows the options dropdown.
   */
  protected showOptions(): void {
    this.select()?.nativeElement.showPicker();
    this.isOpen.set(true);
  }

  /**
   * Hides the options dropdown and restores focus to the button.
   */
  protected hideOptions(): void {
    this.isOpen.set(false);
  }

  /**
   * Handles the selection change event from the native select element.
   * @param event The selection change event.
   */
  onSelectionChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const value = select.value === 'null' ? null : select.value;

    this.selectedValue.set(value);
    this.selectedOptionText.set(select.selectedOptions[0]?.textContent || '');
    this.hideOptions();
    this.restoreFocus();
  }

  /**
   * Restores focus to the button after a selection change.
   */
  private restoreFocus(): void {
    setTimeout(() => {
      this.select()?.nativeElement.blur();
      this.button()?.nativeElement.focus();
    }, 0);
  }

  /**
   * Handles click events outside the select component to close the options dropdown.
   * @param event The mouse click event.
   */
  @HostListener('document:click', ['$event'])
  protected onOutsideClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }

  /**
   * Handles the escape key press to close the options dropdown.
   */
  @HostListener('document:keydown.escape')
  protected onEscapePress(): void {
    if (this.isOpen()) {
      this.hideOptions();
      this.restoreFocus();
    }
  }

  constructor() {
    effect(() => {
      console.log(this.selectedValue());
    });
  }
}
