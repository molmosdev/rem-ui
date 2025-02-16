import { Component } from '@angular/core';
import {
  VerticalNavItem,
  VerticalNavGroup,
  VerticalNav,
} from '../../../../../../../lib/src/public-api';
import { VerticalNavSection } from '../../../../../../../lib/src/core/components/vertical-nav/components/vertical-nav-section/vertical-nav-section.component';

@Component({
  selector: 'app-vertical-nav-playground',
  standalone: true,
  imports: [VerticalNav, VerticalNavItem, VerticalNavGroup, VerticalNavSection],
  template: `
    <div class="playground">
      <div class="component">
        <r-vertical-nav>
          <r-vertical-nav-section>
            <span r-section-title>Routes</span>
            <r-vertical-nav-item>
              <svg
                r-item-prefix
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-house">
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path
                  d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              <span r-item-title>Home</span>
            </r-vertical-nav-item>
            <r-vertical-nav-item>
              <svg
                r-item-prefix
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-contact">
                <path d="M16 2v2" />
                <path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                <path d="M8 2v2" />
                <circle cx="12" cy="11" r="3" />
                <rect x="3" y="4" width="18" height="18" rx="2" />
              </svg>
              <span r-item-title>Profile</span>
            </r-vertical-nav-item>
            <r-vertical-nav-group>
              <svg
                r-group-prefix
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-settings">
                <path
                  d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <div r-group-title>Settings</div>
              <r-vertical-nav-item>
                <svg
                  r-item-prefix
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-bell-dot">
                  <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                  <path
                    d="M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665" />
                  <circle cx="18" cy="8" r="3" />
                </svg>
                <div r-item-title>Notifications</div>
              </r-vertical-nav-item>
            </r-vertical-nav-group>
          </r-vertical-nav-section>
          <r-vertical-nav-section>
            <span r-section-title>Extra</span>
            <r-vertical-nav-item>
              <svg
                r-item-prefix
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-circle-help">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <span r-item-title>Help</span>
            </r-vertical-nav-item>
          </r-vertical-nav-section>
        </r-vertical-nav>
      </div>
    </div>
  `,
})
export default class VerticalNavPlaygroundComponent {}
