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
    <div class="playground">
      <div class="top">
        <div class="component inverted">
          <r-vertical-nav>
            <r-vertical-nav-section>
              <span r-section-title>Routes</span>
              <r-vertical-nav-item>
                <i r-item-prefix [class]="args()[0].value()"></i>
                <span r-item-title>{{ args()[1].value() }}</span>
              </r-vertical-nav-item>
              <r-vertical-nav-item>
                <i r-item-prefix [class]="args()[2].value()"></i>
                <span r-item-title>{{ args()[3].value() }}</span>
              </r-vertical-nav-item>
              <r-vertical-nav-group>
                <i r-group-prefix [class]="args()[4].value()"></i>
                <div r-group-title>{{ args()[5].value() }}</div>
                <r-vertical-nav-item>
                  <i r-item-prefix [class]="args()[6].value()"></i>
                  <div r-item-title>{{ args()[7].value() }}</div>
                </r-vertical-nav-item>
              </r-vertical-nav-group>
            </r-vertical-nav-section>
            <r-vertical-nav-section>
              <span r-section-title>Extra</span>
              <r-vertical-nav-item>
                <i r-item-prefix [class]="args()[8].value()"></i>
                <span r-item-title>{{ args()[9].value() }}</span>
              </r-vertical-nav-item>
            </r-vertical-nav-section>
          </r-vertical-nav>
        </div>
        <!-- <app-code-block
          code="
          <r-vertical-nav>
            <r-vertical-nav-section>
              <span r-section-title>Routes</span>
              <r-vertical-nav-item>
                <i r-item-prefix class='{{ args()[0].value() }}'></i>
                <span r-item-title>{{ args()[1].value() }}</span>
              </r-vertical-nav-item>
              <r-vertical-nav-item>
                <i r-item-prefix class='{{ args()[2].value() }}'></i>
                <span r-item-title>{{ args()[3].value() }}</span>
              </r-vertical-nav-item>
              <r-vertical-nav-group>
                <i r-group-prefix class='{{ args()[4].value() }}'></i>
                <div r-group-title>{{ args()[5].value() }}</div>
                <r-vertical-nav-item>
                  <i r-item-prefix class='{{ args()[6].value() }}'></i>
                  <div r-item-title>{{ args()[7].value() }}</div>
                </r-vertical-nav-item>
              </r-vertical-nav-group>
            </r-vertical-nav-section>
            <r-vertical-nav-section>
              <span r-section-title>Extra</span>
              <r-vertical-nav-item>
                <i r-item-prefix class='{{ args()[8].value() }}'></i>
                <span r-item-title>{{ args()[9].value() }}</span>
              </r-vertical-nav-item>
            </r-vertical-nav-section>
          </r-vertical-nav>
          " /> -->
      </div>
      <app-args [args]="args()" />
    </div>
  `,
})
export default class VerticalNavPlaygroundComponent {
  args = signal<IArg[]>([
    {
      label: 'Home Icon',
      type: 'select',
      value: signal('icon-house'),
      options: [
        { text: 'House', value: 'icon-house' },
        { text: 'Building', value: 'icon-building' },
      ],
    },
    {
      label: 'Home Title',
      type: 'text',
      value: signal('Home'),
    },
    {
      label: 'Profile Icon',
      type: 'select',
      value: signal('icon-contact'),
      options: [
        { text: 'Contact', value: 'icon-contact' },
        { text: 'User round sarch', value: 'icon-user-round-search' },
      ],
    },
    {
      label: 'Profile Title',
      type: 'text',
      value: signal('Profile'),
    },
    {
      label: 'Settings Icon',
      type: 'select',
      value: signal('icon-settings'),
      options: [
        { text: 'Settings', value: 'icon-settings' },
        { text: 'Cog', value: 'icon-cog' },
      ],
    },
    {
      label: 'Settings Title',
      type: 'text',
      value: signal('Settings'),
    },
    {
      label: 'Notifications Icon',
      type: 'select',
      value: signal('icon-bell-dot'),
      options: [
        { text: 'Bell Dot', value: 'icon-bell-dot' },
        { text: 'Bell ring', value: 'icon-bell-ring' },
      ],
    },
    {
      label: 'Notifications Title',
      type: 'text',
      value: signal('Notifications'),
    },
    {
      label: 'Help Icon',
      type: 'select',
      value: signal('icon-circle-help'),
      options: [
        { text: 'Circle Help', value: 'icon-circle-help' },
        {
          text: 'Message circle question',
          value: 'icon-message-circle-question',
        },
      ],
    },
    {
      label: 'Help Title',
      type: 'text',
      value: signal('Help'),
    },
  ]);
}
