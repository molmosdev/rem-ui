import {
  AfterViewInit,
  Component,
  contentChild,
  ElementRef,
  input,
  OnDestroy,
  signal,
  computed,
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
    '[style.color]': 'textColor()', // Use computed signal for text color
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
   * A computed signal that dynamically calculates the text color based on the resolved value.
   */
  readonly textColor = computed(() => {
    const backgroundColor = this.resolveColor(this.value());
    const hex = backgroundColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance > 128 ? '#000000' : '#FFFFFF';
  });

  /**
   * Resolves a color value, handling cases like `transparent` or `color-mix`.
   * @param value The input color value.
   * @returns A valid hexadecimal color.
   */
  resolveColor(value: string): string {
    // Handle `color-mix` values
    const colorMixMatch = value.match(
      /color-mix\(in srgb, (#[0-9a-fA-F]{6}), (#[0-9a-fA-F]{6}) (\d+)%\)/
    );
    if (colorMixMatch) {
      const [, color1, color2, percentage] = colorMixMatch;
      return this.calculateColorMix(
        color1,
        color2,
        parseInt(percentage, 10) / 100
      );
    }

    // Handle `transparent` values
    if (value === 'transparent') {
      return '#ffffff'; // Default to white for transparency
    }

    return value; // Return the original value if no special cases
  }

  /**
   * Calculates the result of a `color-mix` operation.
   * @param color1 The first color in hexadecimal format.
   * @param color2 The second color in hexadecimal format.
   * @param percentage The mix percentage for the second color.
   * @returns The resulting mixed color in hexadecimal format.
   */
  calculateColorMix(
    color1: string,
    color2: string,
    percentage: number
  ): string {
    const hexToRgb = (hex: string) => {
      const bigint = parseInt(hex.replace('#', ''), 16);
      return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
      };
    };

    const rgbToHex = (r: number, g: number, b: number) =>
      `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);

    const r = Math.round(rgb1.r * (1 - percentage) + rgb2.r * percentage);
    const g = Math.round(rgb1.g * (1 - percentage) + rgb2.g * percentage);
    const b = Math.round(rgb1.b * (1 - percentage) + rgb2.b * percentage);

    return rgbToHex(r, g, b);
  }

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
