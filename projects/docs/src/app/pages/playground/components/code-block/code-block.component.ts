import { Component, input } from '@angular/core';
import { Button } from '../../../../../../../lib/src/public-api';

@Component({
  selector: 'app-code-block',
  imports: [Button],
  template: `
    <pre> {{ code() }} </pre>
    <r-button type="secondary">Copy code</r-button>
  `,
  styles: `
    :host {
      height: 100%;
      border: 1px solid var(--border-color);
      border-radius: var(--roundness, 0.5rem);
      background-color: color-mix(
        in srgb,
        var(--bg-color),
        var(--text-color) 1%
      );
      display: flex;
      align-items: center;
      overflow: hidden;
      position: relative;

      pre {
        font-family: 'Geist Mono', monospace !important;
        max-height: 100%;
        font-size: 90%;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: var(--border-color, transparent)
          var(--bg-color, #ffffff);
        box-sizing: border-box;
        width: 100%;
        margin: 0;
        padding-right: 4rem;
      }

      r-button {
        position: absolute;
        right: 1rem;
        top: 1rem;
      }
    }
  `,
})
export class CodeBlockComponent {
  code = input<string>('');
}
