import { Component, computed, inject, model } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../../../../lib/src/core/services/theme.service';
import { ResponsiveService } from '../../../../../../lib/src/core/services/responsive.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  isDarkTheme = computed(() => this.themeService.theme() === 'dark');
  responsiveService = inject(ResponsiveService);
  isTablet = computed(
    () => this.responsiveService.currentDevice() === 'tablet'
  );
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  sideSheet = model(false);
}
