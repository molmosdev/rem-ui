import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { createElement, icons } from 'lucide';

@Component({
  selector: 'i[r-icon]',
  imports: [],
  template: ``,
  host: {
    '[innerHTML]': 'iconSvg()',
    '[style.margin-inline]': 'marginInline()',
  },
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,
  ],
})
export class Icon {
  /**
   * The sanitizer service.
   */
  private sanitizer = inject(DomSanitizer);

  /**
   * The icon of the text field.
   */
  icon = input.required<string>();

  /**
   * The size of the icon.
   */
  size = input(24);

  /**
   * The stroke of the icon.
   */
  strokeWidth = input(1.8);

  /**
   * The color of the icon.
   */
  color = input<string>('var(--foreground, #798194)');

  /**
   * The svg of the icon.
   */
  iconSvg = computed(() => {
    if (!(icons as any)[this.icon()]) {
      console.error(`Icon '${this.icon()}' not found in Lucide icons.`);
      return this.sanitizer.bypassSecurityTrustHtml('');
    }

    const iconSvg = createElement((icons as any)[this.icon()], {
      width: this.size(),
      height: this.size(),
      stroke: this.color(),
      'stroke-width': this.strokeWidth(),
    });
    return this.sanitizer.bypassSecurityTrustHtml(iconSvg.outerHTML);
  });

  /**
   * Whether the icon is leading.
   */
  marginInline = input('0px');
}
