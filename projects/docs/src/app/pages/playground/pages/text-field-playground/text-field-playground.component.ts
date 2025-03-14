import { Component, signal } from '@angular/core';
import { IArg } from '../../interfaces/arg.interface';
import { ArgsComponent } from '../../components/args/args.component';
import { TextField } from '../../../../../../../lib/src/core/components/text-field/text-field.component';
import { Icon } from '../../../../../../../lib/src/core/components/icon/icon.component';
import { Button } from '../../../../../../../lib/src/public-api';

@Component({
  selector: 'app-text-field-playground',
  imports: [TextField, ArgsComponent, Icon, Button],
  template: `
    <div class="playground">
      <div class="top">
        <div class="component">
          <r-text-field
            [type]="args()[0].value()"
            [label]="args()[1].value()"
            [(value)]="args()[2].value"
            [placeholder]="args()[3].value()"
            [error]="args()[4].value()"
            [disabled]="args()[5].value()"
            [numberType]="args()[8].value()"
            [decimals]="args()[9].value()"
            maxWidth="240px">
            @if (args()[7].value() !== 'none') {
              <i
                r-icon
                leading
                [icon]="args()[7].value()"
                [size]="19"
                [color]="
                  !args()[4].value()
                    ? 'var(--input-foreground, #798194)'
                    : 'var(--error-foreground, #c40000ab)'
                "></i>
            }
            @if (args()[6].value() && args()[2].value()) {
              <button
                r-button
                tailing
                variant="transparent"
                size="small"
                [noPaddingInline]="true"
                (click)="args()[2].value.set(null)"
                [style.color]="
                  args()[4].value()
                    ? 'var(--error-foreground, #c40000ab)'
                    : 'var(--input-foreground, #798194)'
                ">
                <i
                  r-icon
                  icon="X"
                  [size]="19"
                  [color]="
                    !args()[4].value()
                      ? 'var(--input-foreground, #798194)'
                      : 'var(--error-foreground, #c40000ab)'
                  "></i>
              </button>
            } @else if (args()[10].value() !== 'none') {
              <span tailing>{{ args()[10].value() }}</span>
            }
          </r-text-field>
        </div>
      </div>
      <app-args [args]="args()" />
    </div>
  `,
})
export default class TextFieldPlaygroundComponent {
  args = signal<IArg[]>([
    {
      label: 'Type',
      type: 'select',
      value: signal('text'),
      options: [
        { label: 'Text', value: 'text' },
        { label: 'Number', value: 'number' },
        { label: 'Password', value: 'password' },
        { label: 'Email', value: 'email' },
      ],
    },
    {
      label: 'Label',
      type: 'text',
      value: signal('Address'),
    },
    {
      label: 'Value',
      type: 'text',
      value: signal(''),
      hidden: true,
    },
    {
      label: 'Placeholder',
      type: 'text',
      value: signal(''),
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
    {
      label: 'Clearable',
      type: 'switch',
      value: signal(false),
    },
    {
      label: 'Leading',
      type: 'select',
      value: signal('Search'),
      options: [
        { label: 'Search', value: 'Search' },
        { label: 'Home', value: 'Home' },
        { label: 'None', value: 'none' },
      ],
    },
    {
      label: 'Number Type',
      type: 'select',
      value: signal('integer'),
      options: [
        { label: 'Integer', value: 'integer' },
        { label: 'Decimal', value: 'decimal' },
      ],
    },
    {
      label: 'Decimals number',
      type: 'number',
      value: signal(2),
    },
    {
      label: 'Tailing',
      type: 'select',
      value: signal('none'),
      options: [
        { label: 'None', value: 'none' },
        { label: '€', value: '€' },
        { label: 'Centimeters', value: 'cm' },
      ],
    },
  ]);
}
