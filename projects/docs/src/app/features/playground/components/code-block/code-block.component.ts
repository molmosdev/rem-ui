import { Component, input } from '@angular/core';

@Component({
  selector: 'code-block',
  template: `<pre [innerText]="code()"></pre>`,
  styles: `
    :host {
      font-family: 'Geist Mono', monospace !important;
      font-size: 90%;
      scrollbar-width: thin;
      border: 1px solid var(--border-color);
      border-radius: var(--roundness, 0.5rem);
      background-color: color-mix(
        in srgb,
        var(--bg-color),
        var(--text-color) 1%
      );
      margin: 0;
      overflow-x: auto;
      width: 100%;

      pre {
        padding: 1rem;
        margin: 0;
      }
    }
  `,
})
export class CodeBlockComponent {
  code = input<string>('');
}
