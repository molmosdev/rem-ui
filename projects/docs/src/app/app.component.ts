import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../../../lib/src/core/services/theme.service';
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { HeaderComponent } from './core/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rem-ui';
  themeService = inject(ThemeService);
  readonly isMenuVisible = signal(false);
  readonly isThemeConfigVisible = signal(false);
}
