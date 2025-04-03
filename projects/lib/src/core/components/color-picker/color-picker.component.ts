import {
  AfterViewInit,
  Component,
  contentChild,
  ElementRef,
  input,
  OnDestroy,
  signal,
} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'label[r-color-picker]',
  template: `<ng-content />
    @if (showColor()) {
      <span class="color-value">
        {{ value() }}
      </span>
    }`,
  styleUrl: './color-picker.component.css',
  host: {
    '[class.focused]': 'focused()',
    '[style.max-width]': 'maxWidth()',
    '[style.--value]': 'value()',
  },
})
export class ColorPicker implements AfterViewInit, OnDestroy {
  /**
   * Specifies the maximum width of the input.
   */
  readonly maxWidth = input<string>('');

  /**
   * Represents the value of the input.
   */
  readonly value = signal<string>('#000000');

  /**
   * Indicates whether the input is focused.
   */
  readonly focused = signal<boolean>(false);

  /**
   * A reference to the native element.
   */
  readonly picker = contentChild<ElementRef>('picker');

  /**
   * A reference to the `NgModel` directive.
   */
  private readonly ngModel = contentChild<NgModel>(NgModel);

  /**
   * Indicates whether to show the color value.
   */
  readonly showColor = input<boolean>(true);

  /**
   * Event listeners for input, focus, and blur events.
   */
  private inputListener?: () => void;
  private focusListener?: () => void;
  private blurListener?: () => void;

  /**
   * Lifecycle hook that is called after the view has been initialized.
   * Sets the initial value of the picker and attaches event listeners.
   */
  ngAfterViewInit(): void {
    this.value.set(
      this.picker()?.nativeElement.value || this.ngModel()?.value || '#000000'
    );
    this.handlePicker();
  }

  /**
   * Attaches event listeners to the picker element for handling input, focus, and blur events.
   * Updates the value and focused state accordingly.
   */
  handlePicker(): void {
    const picker = this.picker()?.nativeElement;
    if (picker) {
      this.inputListener = () => {
        this.value.set(picker.value);
      };
      this.focusListener = () => {
        this.focused.set(true);
      };
      this.blurListener = () => {
        this.focused.set(false);
      };

      picker.addEventListener('input', this.inputListener);
      picker.addEventListener('focus', this.focusListener);
      picker.addEventListener('blur', this.blurListener);
    }
  }

  /**
   * Lifecycle hook that is called when the component is destroyed.
   * Cleans up event listeners attached to the picker element.
   */
  ngOnDestroy(): void {
    const picker = this.picker()?.nativeElement;
    if (picker) {
      if (this.inputListener) {
        picker.removeEventListener('input', this.inputListener);
      }
      if (this.focusListener) {
        picker.removeEventListener('focus', this.focusListener);
      }
      if (this.blurListener) {
        picker.removeEventListener('blur', this.blurListener);
      }
    }
  }
}
