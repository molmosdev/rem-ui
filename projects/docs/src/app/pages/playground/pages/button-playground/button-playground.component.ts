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
  args = signal<IArg[]>([
    {
      label: 'Variant',
      type: 'select',
      value: signal('primary'),
      options: [
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Ghost', value: 'ghost' },
      ],
    },
    {
      label: 'Size',
      type: 'select',
      value: signal('default'),
      options: [
        { label: 'Small', value: 'small' },
        { label: 'Default', value: 'default' },
      ],
    },
    {
      label: 'Radius',
      type: 'select',
      value: signal('medium'),
      options: [
        { label: 'None', value: 'none' },
        { label: 'Medium', value: 'medium' },
        { label: 'Full', value: 'full' },
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
