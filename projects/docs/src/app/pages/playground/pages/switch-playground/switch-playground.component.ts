import { Component, signal } from '@angular/core';
import { IArg } from '../../interfaces/arg.interface';
import { Switch } from '../../../../../../../lib/src/public-api';
import { ArgsComponent } from '../../components/args/args.component';

@Component({
  selector: 'app-switch-playground',
  imports: [Switch, ArgsComponent],
  template: `
    <div class="playground">
      <div class="component">
        <r-switch
          [label]="args()[0].value()"
          [size]="args()[1].value()"
          [value]="args()[2].value()">
        </r-switch>
      </div>
      <app-args [args]="args()" />
    </div>
  `,
})
export default class SwitchPlaygroundComponent {
  args = signal<IArg[]>([
    {
      label: 'Label',
      type: 'text',
      value: signal('Notifications'),
    },
    {
      label: 'Size',
      type: 'select',
      value: signal('medium'),
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Large', value: 'large' },
      ],
    },
    {
      label: 'Value',
      type: 'switch',
      value: signal(false),
    },
  ]);
}
