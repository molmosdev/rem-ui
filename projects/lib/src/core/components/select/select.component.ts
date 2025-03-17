import {
  Component,
  computed,
  ElementRef,
  inject,
  input,
  model,
  output,
  signal,
  Renderer2,
  HostListener,
  effect,
  contentChildren,
  viewChild,
} from '@angular/core';
import { Icon } from '../icon/icon.component';
import { Option } from '../../../public-api';

/**
 * A custom select component that provides enhanced styling and control over native select elements.
 */
@Component({
  selector: 'r-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
  imports: [Icon],
  host: {
    '[class.invalid]': 'invalid()',
    '[class.disabled]': 'disabled()',
    '[style.max-width]': 'maxWidth()',
    '[class.active-with-label]': 'isActiveState() && label()',
    '(keydown)': 'onKeyDown($event)',
  },
  standalone: true,
})
export class Select {
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
  readonly options = contentChildren(Option);

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
   * Reference to the select element within the component
   * @private
   */
  private select = viewChild<ElementRef>('select');

  /**
   * Reference to the renderer
   * @private
   */
  private readonly renderer = inject(Renderer2);

  /**
   * Initializes the select component.
   */
  constructor() {
    effect(() => this.renderOptions());
  }

  /**
   * Renders the options within the select element.
   * @private
   */
  private renderOptions(): void {
    const select = this.select()?.nativeElement;

    if (!select) {
      return;
    }
    // Clear the existing options
    select.innerHTML = '';

    // Append the options to the select
    this.options()?.forEach(option => {
      this.renderer.appendChild(select, option.el.nativeElement);
    });
  }

  /**
   * Handles the selection change event from the native select element.
   * @param event The selection change event.
   */
  onSelectionChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const value = select.value === 'null' ? null : select.value;

    this.selectedValue.set(value);
    this.isOpen.set(false);
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
   * Handles keyboard events to open or close the options dropdown.
   * @param event The keyboard event.
   */
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.isOpen.set(false);
    } else if (event.key !== 'Enter') {
      this.isOpen.set(true);
    }
  }
}
