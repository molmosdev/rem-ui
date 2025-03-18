import {
  Component,
  computed,
  contentChildren,
  effect,
  ElementRef,
  inject,
  input,
  model,
  output,
  Renderer2,
  signal,
  viewChild,
} from '@angular/core';
import { Icon } from '../icon/icon.component';
import { Option } from '../../../public-api';

@Component({
  selector: 'r-search',
  imports: [Icon],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  host: {
    '[style.max-width]': 'maxWidth()',
    '[class.invalid]': 'invalid()',
    '[class.disabled]': 'disabled()',
    '[class.label-up]':
      '(inputTextValue() || placeholder() || focused()) && label()',
  },
})
export class Search {
  /**
   * The label associated with the search component.
   */
  readonly label = input<string>();

  /**
   * The maximum width of the search component.
   */
  readonly maxWidth = input('');

  /**
   * The placeholder of the text field.
   */
  readonly placeholder = input<string>('');

  /**
   * Indicates whether the search component is in an invalid state.
   */
  invalid = model(false);

  /**
   * Indicates whether the search component is disabled.
   */
  disabled = model(false);

  /**
   * The value of the text field.
   */
  value = model<string | null>(null);

  /**
   * The selected value of the search component. Computed to avoid issues
   * when passing the value directly to the select, as it may conflict
   * with the prop value of the select and the value model.
   */
  selectValue = computed(() => this.value());

  /**
   * Emits the value of the search component when the value changes.
   */
  searchChange = output<string>();

  /**
   * The value of the text field.
   */
  inputTextValue = signal<string>('');

  /**
   * Emits when the search component is focused.
   */
  focused = signal<boolean>(false);

  /**
   * The options available for selection.
   */
  readonly options = contentChildren(Option);

  /**
   * Reference to the select element within the component
   * @private
   */
  private select = viewChild<ElementRef>('select');

  /**
   * Reference to the input element within the component
   * @private
   */
  private input = viewChild<ElementRef>('input');

  /**
   * Reference to the renderer
   * @private
   */
  private readonly renderer = inject(Renderer2);

  /**
   * Initializes the search component.
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
    const options = this.options();

    if (!select || !options || options.length === 0) {
      return;
    }
    // Clear the existing options
    select.innerHTML = '';

    const noValueOption = this.renderer.createElement('option');
    noValueOption.value = '';
    noValueOption.innerText = '';

    this.renderer.appendChild(select, noValueOption);

    // Append the options to the select
    options.forEach(option => {
      this.renderer.appendChild(select, option.el.nativeElement);
    });

    // Set the selected value
    const htmlSelect = select as HTMLSelectElement;
    htmlSelect.showPicker();
  }

  /**
   * Handles the change event of the input text.
   */
  onInputValueChange(event: any): void {
    const value = event.target.value as string;
    if (this.value()) {
      this.value.set(null);
      this.inputTextValue.set('');
    } else {
      this.inputTextValue.set(value);

      setTimeout(() => {
        this.select()?.nativeElement.blur();
        this.input()?.nativeElement.focus();
      }, 0);
    }
    this.searchChange.emit(value);
  }

  /**
   * Resets the search component.
   */
  reset(): void {
    this.value.set(null);
    this.inputTextValue.set('');
  }

  /**
   * Handles the select value change event.
   */
  onSelectValueChange(event: any): void {
    const value = event.target.value as string;
    const option = this.options().find(option => option.value() === value);
    const optionInnerText = option?.el.nativeElement.innerText || '';

    this.value.set(value);
    this.inputTextValue.set(optionInnerText);

    setTimeout(() => {
      this.select()?.nativeElement.blur();
      this.input()?.nativeElement.focus();
    }, 0);
  }

  //TODO: Add feature to handle keydown arrow up and down to focus on options

  //TODO: Add feature to show datalist for iOS devices
}
