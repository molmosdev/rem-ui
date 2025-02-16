import { Component, signal } from '@angular/core';
import { IArg } from '../../interfaces/arg.interface';
import { Password } from '../../../../../../../lib/src/public-api';
import { ArgsComponent } from '../../components/args/args.component';

@Component({
  selector: 'app-password-playground',
  imports: [Password, ArgsComponent],
  template: `
    <div class="playground">
      <div class="component">
        <r-password
          [label]="args()[0].value()"
          [placeholder]="args()[1].value()"
          [value]="args()[2].value()"
          [error]="args()[3].value()"
          [clearable]="args()[4].value()"
          [disabled]="args()[5].value()"
          [searching]="args()[6].value()"
          [showPasswordToggle]="args()[7].value()">
        </r-password>
      </div>
      <app-args [args]="args()" />
    </div>
  `,
})
export default class PasswordPlaygroundComponent {
  args = signal<IArg[]>([
    {
      label: 'Label',
      type: 'text',
      value: signal('Password'),
    },
    {
      label: 'Placeholder',
      type: 'text',
      value: signal(''),
    },
    {
      label: 'Value',
      type: 'text',
      value: signal(''),
      hidden: true,
    },
    {
      label: 'Error',
      type: 'switch',
      value: signal(false),
    },
    {
      label: 'Clearable',
      type: 'switch',
      value: signal(false),
    },
    {
      label: 'Disabled',
      type: 'switch',
      value: signal(false),
    },
    {
      label: 'Searching',
      type: 'switch',
      value: signal(false),
    },
    {
      label: 'Show password toggle',
      type: 'switch',
      value: signal(true),
    },
  ]);
}
