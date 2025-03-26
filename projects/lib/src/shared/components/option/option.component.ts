import { Component, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'option[r-option]',
  template: ' <ng-content /> ',
  styles: [
    `
      :host {
        margin-bottom: 0.25rem;
        cursor: pointer;
        padding: 0.5rem 0.75rem;
        color: var(--foreground, #798194);
        transition: 0.1s;
        border-radius: calc(var(--roundness, 0.5rem) - 0.2rem);

        &::checkmark {
          display: none;
        }

        &:focus-visible {
          outline-width: 0;
        }

        &:hover,
        &:focus-visible {
          background-color: color-mix(
            in srgb,
            var(--foreground, #798194) 5%,
            var(--background, #ffffff)
          );
        }

        &:checked {
          background-color: var(--primary, #0a0a0a);
          color: var(--primary-foreground, #ffffff);
        }

        &:disabled {
          pointer-events: none;
          opacity: 0.5;
        }
      }
    `,
  ],
})
export class Option {
  /**
   * Reference to the host element.
   */
  el = inject(ElementRef);
}
