import { Component, signal } from '@angular/core';
import { IArg } from '../../interfaces/arg.interface';
import { Spinner } from '../../../../../../../lib/src/public-api';
import { ArgsComponent } from '../../components/args/args.component';

@Component({
  selector: 'app-spinner-playground',
  imports: [Spinner, ArgsComponent],
  template: `
    <div class="playground">
      <div class="top">
        <div class="component">
          <r-spinner [active]="args()[0].value()" [size]="args()[1].value()" />
        </div>
        <!-- <app-code-block
          code="
          <r-spinner
            [active]='{{ args()[0].value() }}'
            [size]='{{ args()[1].value() }}'>
          </r-spinner>
          " /> -->
      </div>
      <app-args [args]="args()" />
    </div>
  `,
})
export default class SpinnerPlaygroundComponent {
  readonly args = signal<IArg[]>([
    {
      label: 'Active',
      type: 'switch',
      value: signal(true),
    },
    {
      label: 'Size',
      type: 'number',
      value: signal(35),
    },
  ]);
}
