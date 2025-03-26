import { Component, signal } from '@angular/core';
import { IArg } from '../../interfaces/arg.interface';
import { Button } from '../../../../../../../lib/src/public-api';
import { ArgsComponent } from '../../components/args/args.component';

@Component({
  selector: 'app-button-playground',
  imports: [Button, ArgsComponent],
  template: `
    <div class="playground">
      <div class="top">
        <div class="component">
          <button
            r-button
            [variant]="args()[0].value()"
            [size]="args()[1].value()"
            [radius]="args()[2].value()"
            [disabled]="args()[3].value()"
            [loading]="args()[4].value()">
            {{ args()[5].value() }}
          </button>
        </div>
        <!-- <app-code-block
          code="
          <button
            r-button
            variant='{{ args()[0].value() }}'
            size='{{ args()[1].value() }}'
            radius='{{ args()[2].value() }}'
            [disabled]={{ args()[3].value() }}
            [loading]={{ args()[4].value() }}>
            {{ args()[5].value() }}
          </button>
        " /> -->
      </div>
      <app-args [args]="args()" />
    </div>
  `,
})
export default class ButtonPlaygroundComponent {
  readonly args = signal<IArg[]>([
    {
      label: 'Variant',
      type: 'select',
      value: signal('primary'),
      options: [
        { text: 'Primary', value: 'primary' },
        { text: 'Secondary', value: 'secondary' },
        { text: 'Outlined', value: 'outlined' },
        { text: 'Ghost', value: 'ghost' },
      ],
    },
    {
      label: 'Size',
      type: 'select',
      value: signal('default'),
      options: [
        { text: 'Small', value: 'small' },
        { text: 'Default', value: 'default' },
      ],
    },
    {
      label: 'Radius',
      type: 'select',
      value: signal('medium'),
      options: [
        { text: 'None', value: 'none' },
        { text: 'Medium', value: 'medium' },
        { text: 'Full', value: 'full' },
      ],
    },
    {
      label: 'Disabled',
      type: 'switch',
      value: signal(false),
    },
    {
      label: 'Loading',
      type: 'switch',
      value: signal(false),
    },
    {
      label: 'Button content',
      type: 'text',
      value: signal('This is a button'),
    },
  ]);
}
