import { Component, signal } from '@angular/core';
import { IArg } from '../../interfaces/arg.interface';
import { Switch } from '../../../../../../../lib/src/public-api';
import { ArgsComponent } from '../../components/args/args.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch-playground',
  imports: [Switch, ArgsComponent, FormsModule],
  template: `
    <div class="playground">
      <div class="top">
        <div class="component">
          <input
            type="checkbox"
            r-switch
            [size]="args()[0].value()"
            [(ngModel)]="args()[1].value" />
        </div>
        <!-- <app-code-block
          code="
          <button
            r-switch
            size='{{ args()[0].value() }}'
            [value]='{{ args()[1].value() }}'>
          </button>
          " /> -->
      </div>
      <app-args [args]="args()" />
    </div>
  `,
})
export default class SwitchPlaygroundComponent {
  args = signal<IArg[]>([
    {
      label: 'Size',
      type: 'select',
      value: signal('default'),
      options: [
        { text: 'Default', value: 'default' },
        { text: 'Large', value: 'large' },
      ],
    },
    {
      label: 'Value',
      type: 'switch',
      value: signal(false),
    },
  ]);
}
