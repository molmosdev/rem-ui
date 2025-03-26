import { Component, signal } from '@angular/core';
import { IArg } from '../../interfaces/arg.interface';
import { Textarea } from '../../../../../../../lib/src/public-api';
import { ArgsComponent } from '../../components/args/args.component';

@Component({
  selector: 'app-textarea-playground',
  imports: [Textarea, ArgsComponent],
  template: `
    <div class="playground">
      <div class="top">
        <div class="component">
          <r-textarea
            [label]="args()[0].value()"
            [placeholder]="args()[1].value()"
            [value]="args()[2].value()"
            [error]="args()[3].value()"
            [disabled]="args()[4].value()" />
        </div>
        <!-- <app-code-block
          code="
          <r-textarea
            [label]='{{ args()[0].value() }}'
            [placeholder]='{{ args()[1].value() }}'
            [value]='{{ args()[2].value() }}'
            [error]='{{ args()[3].value() }}'
            [disabled]='{{ args()[4].value() }}'>
          </r-textarea>
          " /> -->
      </div>
      <app-args [args]="args()" />
    </div>
  `,
})
export default class TextareaPlaygroundComponent {
  readonly args = signal<IArg[]>([
    {
      label: 'Label',
      type: 'text',
      value: signal('Observations'),
    },
    {
      label: 'Placeholder',
      type: 'text',
      value: signal(''),
    },
    {
      label: 'Value',
      type: 'text',
      value: signal('Lorem ipsum...'),
      hidden: true,
    },
    {
      label: 'Error',
      type: 'switch',
      value: signal(false),
    },
    {
      label: 'Disabled',
      type: 'switch',
      value: signal(false),
    },
  ]);
}
