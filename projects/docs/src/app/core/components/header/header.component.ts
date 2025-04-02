import { Component, computed, inject, model } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../../../../lib/src/core/services/theme.service';
import { ResponsiveService } from '../../../../../../lib/src/core/services/responsive.service';
import { Button, Icon } from '../../../../../../lib/src/public-api';
import { ButtonGroup } from '../../../../../../lib/src/core/components/button-group/button-group.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Icon, Button, ButtonGroup],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  responsiveService = inject(ResponsiveService);

  readonly theme = computed(() => this.themeService.theme());
  readonly isTablet = computed(
    () => this.responsiveService.currentDevice() === 'tablet'
  );
  readonly isMenuVisible = model(false);
  readonly isThemeConfigVisible = model(false);

  applyTheme(theme: 'light' | 'dark' | 'auto'): void {
    this.themeService.applyTheme(theme);
  }
}
