import { Component, computed, inject, signal } from '@angular/core';
import {
  BottomSheet,
  Button,
  fadeInFadeOutTrigger,
  ResponsiveService,
  SideSheet,
  VerticalNav,
  VerticalNavItem,
  VerticalNavSection,
} from '../../../../../lib/src/public-api';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { ThemeService } from '../../../../../lib/src/shared/services/theme.service';

@Component({
  selector: 'app-docs',
  imports: [
    Button,
    BottomSheet,
    VerticalNav,
    VerticalNavItem,
    VerticalNavSection,
    NgTemplateOutlet,
    SideSheet,
    NgClass,
  ],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.css',
  animations: [fadeInFadeOutTrigger],
})
export default class DocsComponent {
  themeService = inject(ThemeService);
  isDarkMode = computed(() => this.themeService.theme() === 'dark');
  responsiveService = inject(ResponsiveService);
  isMobile = computed(
    () => this.responsiveService.currentDevice() === 'mobile'
  );
  componentsBottomSheet = signal(false);

  toggleDarkMode() {
    this.themeService.toggleTheme();
  }
}
