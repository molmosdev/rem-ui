import { Component, input } from '@angular/core';

@Component({
  selector: 'pre',
  template: ``,
  styles: `
    :host {
      font-family: 'Geist Mono', monospace !important;
      max-height: 100%;
      font-size: 90%;
      overflow-y: auto;
      overflow-x: hidden;
      scrollbar-width: thin;
      border: 1px solid var(--border-color);
      border-radius: var(--roundness, 0.5rem);
      background-color: color-mix(
        in srgb,
        var(--bg-color),
        var(--text-color) 1%
      );
      margin: 0;
      padding: 1.5rem;
      box-sizing: border-box;
    }
  `,
  host: {
    '[innerText]': 'code()',
  },
})
export class CodeBlockComponent {
  code = input<string>('');
}
