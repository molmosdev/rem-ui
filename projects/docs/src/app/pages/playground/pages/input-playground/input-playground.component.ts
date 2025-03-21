import { Component, signal } from '@angular/core';
import { IArg } from '../../interfaces/arg.interface';
import { ArgsComponent } from '../../components/args/args.component';
import { InputComponent } from '../../../../../../../lib/src/core/components/input/input.component';
import { Icon } from '../../../../../../../lib/src/core/components/icon/icon.component';
import { Button } from '../../../../../../../lib/src/public-api';

@Component({
  selector: 'app-input-playground',
  imports: [InputComponent, ArgsComponent, Icon, Button],
  template: `
    <div class="playground">
      <div class="top">
        <div class="component">
          <input
            r-input
            [type]="args()[0].value()"
            [placeholder]="args()[1].value()"
            [(value)]="args()[2].value"
            [disabled]="args()[3].value()"
            [numberType]="args()[4].value()"
            [decimals]="args()[5].value()"
            maxWidth="240px" />
          @if (args()[6].value() && args()[2].value()) {
            <button
              r-button
              tailing
              variant="transparent"
              size="small"
              [noPaddingInline]="true"
              (click)="args()[2].value.set(null)"
              [style.color]="
                args()[7].value()
                  ? 'var(--error-foreground, #c40000ab)'
                  : 'var(--input-foreground, #798194)'
              ">
              <i
                r-icon
                icon="X"
                [size]="19"
                [color]="
                  !args()[7].value()
                    ? 'var(--input-foreground, #798194)'
                    : 'var(--error-foreground, #c40000ab)'
                "></i>
            </button>
          }
        </div>
      </div>
      <app-args [args]="args()" />
    </div>
  `,
})
export default class InputPlaygroundComponent {
  args = signal<IArg[]>([
    {
      label: 'Type',
      type: 'select',
      value: signal('text'),
      options: [
        { text: 'Text', value: 'text' },
        { text: 'Number', value: 'number' },
        { text: 'Password', value: 'password' },
        { text: 'Email', value: 'email' },
      ],
    },
    {
      label: 'Placeholder',
      type: 'text',
      value: signal('Enter text'),
    },
    {
      label: 'Value',
      type: 'text',
      value: signal(''),
      hidden: true,
    },
    {
      label: 'Disabled',
      type: 'switch',
      value: signal(false),
    },
    {
      label: 'Number Type',
      type: 'select',
      value: signal('integer'),
      options: [
        { text: 'Integer', value: 'integer' },
        { text: 'Decimal', value: 'decimal' },
      ],
    },
    {
      label: 'Decimals number',
      type: 'number',
      value: signal(2),
    },
    {
      label: 'Error',
      type: 'switch',
      value: signal(false),
    },
  ]);
}
