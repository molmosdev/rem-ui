import { Component, signal } from '@angular/core';
import {
  VerticalNavItem,
  VerticalNavGroup,
  VerticalNav,
} from '../../../../../../../lib/src/public-api';
import { VerticalNavSection } from '../../../../../../../lib/src/core/components/vertical-nav/components/vertical-nav-section/vertical-nav-section.component';
import { ArgsComponent } from '../../components/args/args.component';
import { IArg } from '../../interfaces/arg.interface';

@Component({
  selector: 'app-vertical-nav-playground',
  standalone: true,
  imports: [
    VerticalNav,
    VerticalNavItem,
    VerticalNavGroup,
    VerticalNavSection,
    ArgsComponent,
  ],
  template: `
    <div class="playground inverted">
      <div class="component">
        <r-vertical-nav>
          <r-vertical-nav-section>
            <span r-section-title>{{ args()[0].value() }}</span>
            <r-vertical-nav-item>
              <i r-item-prefix [class]="args()[1].value()"></i>
              <span r-item-title>{{ args()[2].value() }}</span>
            </r-vertical-nav-item>
            <r-vertical-nav-group>
              <i r-group-prefix [class]="args()[3].value()"></i>
              <div r-group-title>{{ args()[4].value() }}</div>
              <r-vertical-nav-item>
                <i r-item-prefix [class]="args()[5].value()"></i>
                <div r-item-title>{{ args()[6].value() }}</div>
              </r-vertical-nav-item>
            </r-vertical-nav-group>
          </r-vertical-nav-section>
          <r-vertical-nav-section>
            <span r-section-title>{{ args()[7].value() }}</span>
            <r-vertical-nav-item>
              <i r-item-prefix [class]="args()[8].value()"></i>
              <span r-item-title>{{ args()[9].value() }}</span>
            </r-vertical-nav-item>
          </r-vertical-nav-section>
        </r-vertical-nav>
      </div>
      <app-args [args]="args()" />
    </div>
  `,
})
export default class VerticalNavPlaygroundComponent {
  args = signal<IArg[]>([
    {
      label: 'Section 1 Title',
      type: 'text',
      value: signal('Routes'),
    },
    {
      label: 'Item 1 Icon',
      type: 'select',
      value: signal('icon-house'),
      options: [
        { label: 'House', value: 'icon-house' },
        { label: 'Building', value: 'icon-building' },
      ],
    },
    {
      label: 'Item 1 Title',
      type: 'text',
      value: signal('Home'),
    },
    {
      label: 'Group 1 Icon',
      type: 'select',
      value: signal('icon-settings'),
      options: [
        { label: 'Settings', value: 'icon-settings' },
        { label: 'Cog', value: 'icon-cog' },
      ],
    },
    {
      label: 'Group 1 Title',
      type: 'text',
      value: signal('Settings'),
    },
    {
      label: 'Item 2 Icon',
      type: 'select',
      value: signal('icon-bell-dot'),
      options: [
        { label: 'Bell Dot', value: 'icon-bell-dot' },
        { label: 'Bell ring', value: 'icon-bell-ring' },
      ],
    },
    {
      label: 'Item 2 Title',
      type: 'text',
      value: signal('Notifications'),
    },
    {
      label: 'Section 2 Title',
      type: 'text',
      value: signal('Extra'),
    },
    {
      label: 'Item 3 Icon',
      type: 'select',
      value: signal('icon-circle-help'),
      options: [
        { label: 'Circle Help', value: 'icon-circle-help' },
        {
          label: 'Message circle question',
          value: 'icon-message-circle-question',
        },
      ],
    },
    {
      label: 'Item 3 Title',
      type: 'text',
      value: signal('Help'),
    },
  ]);
}
