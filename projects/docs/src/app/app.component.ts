import {
  afterRenderEffect,
  Component,
  computed,
  inject,
  Renderer2,
  signal,
} from '@angular/core';
import { Button, BottomSheet } from '../../../lib/src/public-api';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [Button, BottomSheet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rem-ui';
  componentsBottomSheet = signal(false);
  themeService = inject(ThemeService);
  renderer = inject(Renderer2);
  isFirstRender = true;
  isDarkMode = computed(() => this.themeService.isDarkMode());

  constructor() {
    afterRenderEffect(() => {
      this.isFirstRender &&
        this.themeService.setDarkMode(
          window.matchMedia('(prefers-color-scheme: dark)').matches
        );
      this.isFirstRender = false;
      this.renderer.setAttribute(
        document.body,
        'data-theme',
        this.isDarkMode() ? 'dark' : 'light'
      );
    });
  }
}
