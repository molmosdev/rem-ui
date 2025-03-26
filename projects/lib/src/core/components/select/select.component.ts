import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  inject,
  input,
  model,
  output,
  Renderer2,
  signal,
} from '@angular/core';

@Component({
  selector: 'select[r-select]',
  imports: [],
  template: ``,
  styleUrl: './select.component.css',
  host: {
    '[class.invalid]': 'invalid()',
    '[class.disabled]': 'disabled()',
    '[style.max-width]': 'maxWidth()',
    '(change)': 'change($event.target.value)',
  },
})
export class Select implements AfterViewInit {
  /**
   * The value of the input.
   */
  readonly value = signal<string | null>(null);

  /**
   * Whether the input is invalid.
   */
  readonly invalid = model<boolean>(false);

  /**
   * Whether the input is disabled.
   */
  readonly disabled = model<boolean>(false);

  /**
   * The maximum width of the input.
   */
  readonly maxWidth = input<string>('');

  /**
   * The options available for selection.
   */
  readonly options = input<
    {
      value: string | null;
      text: string;
      disabled?: boolean;
    }[]
  >([]);

  /**
   * Event emitted when the value changes.
   */
  valueChange = output<string | null>();

  /**
   * Reference to the input element.
   */
  readonly el = inject<ElementRef<HTMLSelectElement>>(ElementRef);

  /**
   * Indicates whether the options dropdown is open.
   */
  readonly isOpen = signal(false);

  /**
   * Reference to the renderer
   * @private
   */
  readonly renderer = inject(Renderer2);

  /**
   * Initializes the select component.
   */
  constructor() {
    effect(() => this.renderOptions());
  }

  /**
   * After the view has been initialized, set the value of the select.
   */
  ngAfterViewInit(): void {
    this.value.set(this.el.nativeElement.value);
  }

  /**
   * Renders the options within the select element.
   * @private
   */
  private renderOptions(): void {
    const select = this.el.nativeElement;

    if (!select) {
      return;
    }
    // Clear the existing options
    select.innerHTML = '';

    // Append the options to the select
    this.options()?.forEach(option => {
      const optionEl = this.renderer.createElement('option');
      optionEl.value = option.value;
      optionEl.text = option.text;
      optionEl.disabled = option.disabled;
      this.renderer.appendChild(select, optionEl);
    });
  }

  /**
   * Handles the select change event.
   * @param value - The value of the select.
   */
  change(value: string): void {
    this.valueChange.emit(value);
    this.value.set(value);
  }
}
