import { Component, signal } from '@angular/core';
import { IArg } from '../../interfaces/arg.interface';
import { Button } from '../../../../../../../lib/src/public-api';
import { ArgsComponent } from '../../components/args/args.component';
import { CodeBlockComponent } from '../../components/code-block/code-block.component';

@Component({
  selector: 'app-button-playground',
  imports: [Button, ArgsComponent, CodeBlockComponent],
  template: `
    <div class="playground">
      <div class="top">
        <div class="component">
          <r-button
            [type]="args()[0].value()"
            [disabled]="args()[1].value()"
            [loading]="args()[2].value()">
            {{ args()[3].value() }}
          </r-button>
        </div>
        <app-code-block
          code="
        <r-button
          [type]='{{ args()[0].value() }}'
          [disabled]='{{ args()[1].value() }}'
          [loading]='{{ args()[2].value() }}'>
          {{ args()[3].value() }}
        </r-button>
        " />
      </div>
      <app-args [args]="args()" />
    </div>
  `,
})
export default class ButtonPlaygroundComponent {
  args = signal<IArg[]>([
    {
      label: 'Type',
      type: 'select',
      value: signal('primary'),
      options: [
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Ghost', value: 'ghost' },
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
