import {
  Injectable,
  Renderer2,
  RendererFactory2,
  inject,
  afterRenderEffect,
} from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  /** Signal to hold the current theme, either 'light' or 'dark'. */
  readonly theme = signal<'light' | 'dark'>('light');
  private renderer: Renderer2;
  private rendererFactory = inject(RendererFactory2);

  constructor() {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    afterRenderEffect(() => {
      this.initializeTheme();
    });
  }

  /**
   * Initializes the theme based on the user's preference.
   * Only called in browser environment.
   */
  private initializeTheme(): void {
    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    this.applyTheme(isDarkMode ? 'dark' : 'light');
  }

  /**
   * Applies the specified theme to the document body.
   * @param theme - The theme to apply, either 'light' or 'dark'.
   */
  applyTheme(theme: 'light' | 'dark') {
    this.theme.set(theme);
    this.renderer.setAttribute(document.body, 'data-theme', theme);
  }

  /**
   * Removes the theme attribute from the document body.
   */
  removeTheme() {
    this.renderer.removeAttribute(document.body, 'data-theme');
  }

  /**
   * Toggles the theme between 'light' and 'dark'.
   */
  toggleTheme() {
    this.applyTheme(this.theme() === 'light' ? 'dark' : 'light');
  }
}
