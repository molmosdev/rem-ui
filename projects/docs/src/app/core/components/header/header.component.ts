import { Component, computed, inject, model, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../../../../lib/src/core/services/theme.service';
import { ResponsiveService } from '../../../../../../lib/src/core/services/responsive.service';
import { Button, Icon } from '../../../../../../lib/src/public-api';
import { SideSheet } from '../../../../../../lib/src/core/components/side-sheet/side-sheet.component';
import { ThemeConfiguratorComponent } from './components/theme-configurator/theme-configurator.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Icon, Button, SideSheet, ThemeConfiguratorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  readonly isDarkTheme = computed(() => this.themeService.theme() === 'dark');
  responsiveService = inject(ResponsiveService);
  readonly isTablet = computed(
    () => this.responsiveService.currentDevice() === 'tablet'
  );
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  readonly sideSheet = model(false);
  readonly isThemeConfiguratorOpen = signal(false);
}
