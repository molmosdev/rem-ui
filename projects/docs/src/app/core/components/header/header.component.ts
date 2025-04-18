import { Component, computed, inject, model } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../../../../lib/src/core/services/theme.service';
import { ResponsiveService } from '../../../../../../lib/src/core/services/responsive.service';
import {
  Button,
  Icon,
  MenuTrigger,
} from '../../../../../../lib/src/public-api';
import { Menu } from '../../../../../../lib/src/core/components/menu/menu.component';
import { MenuItemRadioComponent } from '../../../../../../lib/src/core/components/menu/shared/components/menu-item-radio/menu-item-radio.component';
import { MenuGroupComponent } from '../../../../../../lib/src/core/components/menu/shared/components/menu-group/menu-group.component';

@Component({
  selector: 'header',
  imports: [
    RouterLink,
    Icon,
    Button,
    MenuTrigger,
    Menu,
    MenuItemRadioComponent,
    MenuGroupComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  responsiveService = inject(ResponsiveService);
  readonly isDesktop = computed(
    () => this.responsiveService.currentDevice() === 'desktop'
  );

  readonly theme = computed(() => this.themeService.theme());
  readonly isThemeConfigVisible = model(false);

  applyTheme(theme: 'light' | 'dark' | 'auto'): void {
    this.themeService.applyTheme(theme);
  }
}
