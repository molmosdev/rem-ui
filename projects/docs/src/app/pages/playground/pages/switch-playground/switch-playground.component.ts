import { Component, signal } from '@angular/core';
import { IArg } from '../../interfaces/arg.interface';
import { Switch } from '../../../../../../../lib/src/public-api';
import { ArgsComponent } from '../../components/args/args.component';
import { CodeBlockComponent } from '../../components/code-block/code-block.component';

@Component({
  selector: 'app-switch-playground',
  imports: [Switch, ArgsComponent, CodeBlockComponent],
  template: `
    <div class="playground">
      <div class="top">
        <div class="component">
          <!-- eslint-disable-next-line @angular-eslint/template/elements-content -->
          <button
            r-switch
            [size]="args()[0].value()"
            [(checked)]="args()[1].value"></button>
        </div>
        <app-code-block
          code="
          <button
            r-switch
            size='{{ args()[0].value() }}'
            [value]='{{ args()[1].value() }}'>
          </button>
          " />
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
