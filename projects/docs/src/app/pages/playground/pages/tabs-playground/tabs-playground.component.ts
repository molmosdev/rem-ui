import { Component, computed, signal } from '@angular/core';
import { Tabs, Tab } from '../../../../../../../lib/src/public-api';
import { ArgsComponent } from '../../components/args/args.component';
import { IArg } from '../../interfaces/arg.interface';

@Component({
  selector: 'app-tabs-playground',
  imports: [Tabs, Tab, ArgsComponent],
  template: `
    <div class="playground">
      <div class="top">
        <div class="component">
          <r-tabs [(selectedValue)]="args()[0].value">
            @for (tab of tabs; track tab) {
              <r-tab [value]="tab.value" [disabled]="tab.disabled">
                {{ tab.label() }}
              </r-tab>
            }
          </r-tabs>
        </div>
      </div>
      <app-args [args]="args()" />
    </div>
  `,
})
export default class TabsPlaygroundComponent {
  tabs = [
    { label: signal('Tab 1'), value: 'tab1', disabled: false },
    { label: signal('Tab 2'), value: 'tab2', disabled: false },
    { label: signal('Tab 3'), value: 'tab3', disabled: true },
  ];

  args = signal<IArg[]>([
    {
      label: 'Selected Tab',
      type: 'select',
      value: signal(null),
      options: [
        { label: 'Tab 1', value: 'tab1' },
        { label: 'Tab 2', value: 'tab2' },
        { label: 'Tab 3', value: 'tab3' },
      ],
    },
    {
      label: 'Tab 1 Label',
      type: 'text',
      value: this.tabs[0].label,
    },
    {
      label: 'Tab 2 Label',
      type: 'text',
      value: this.tabs[1].label,
    },
    {
      label: 'Tab 3 Label',
      type: 'text',
      value: this.tabs[2].label,
    },
  ]);

  code = computed(() => {
    const tabsString = this.tabs
      .map(
        tab => `
      <r-tab [value]='${tab.value}' [disabled]='${tab.disabled}'>
        ${tab.label()}
      </r-tab>
    `
      )
      .join('');

    return `
      <r-tabs [(selectedValue)]='${this.args()[0].value()}'>
        ${tabsString}
      </r-tabs>
    `;
  });
}
