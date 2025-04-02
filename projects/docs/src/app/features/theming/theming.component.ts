import { Component } from '@angular/core';
import { CodeBlockComponent } from '../documentation/shared/components/code-block.component';
import { Icon, Button } from '../../../../../lib/src/public-api';

@Component({
  selector: 'app-theming',
  imports: [CodeBlockComponent, Button, Icon],
  templateUrl: './theming.component.html',
  styleUrl: './theming.component.css',
})
export default class ThemingComponent {
  themeSwitcherCode = `<button r-button variant='outlined' (click)='switchTheme("light")'>
  <i r-icon [size]='18' icon='Sun'></i> Light Theme
</button>
<button r-button variant='outlined' (click)='switchTheme("dark")'>
  <i r-icon [size]='18' icon='Moon'></i> Dark Theme
</button>`;

  cssCode = `:root {
  /* Enable support for light and dark color schemes */
  color-scheme: light dark;

  /* Base colors */
  --black: #0a0a0a;
  --white: #ffffff;

  /* Base properties */
  --radius: 0.5rem;

  /* Base theme colors */
  --bg-color: light-dark(var(--white), var(--black));
  --text-color: light-dark(var(--black), var(--white));

  /* UI colors */
  --background: light-dark(var(--white), var(--black));
  --foreground: light-dark(var(--black), var(--white));
  --border-color: light-dark(
    color-mix(in srgb, var(--white), var(--black) 8%),
    color-mix(in srgb, var(--black), var(--white) 10%)
  );

  /* Component colors */
  --primary: light-dark(var(--black), var(--white));
  --primary-foreground: light-dark(var(--white), var(--black));
  --primary-border-color: light-dark(var(--black), var(--white));
  --secondary: transparent;
  --secondary-foreground: light-dark(var(--black), var(--white));
  --secondary-border-color: light-dark(
    color-mix(in srgb, var(--white), var(--black) 8%),
    color-mix(in srgb, var(--black), var(--white) 5%)
  );
  --input-background: light-dark(
    color-mix(in srgb, var(--bg-color), var(--black) 1%),
    color-mix(in srgb, var(--bg-color), var(--white) 1%)
  );
  --input-foreground: light-dark(var(--black), var(--white));
  
  /* Error colors */
  --error-foreground: light-dark(#c40000ab, #ff6b6b);
  --error: light-dark(#fff0f0, #382d2d);
}

/* Dark theme configuration */
[data-theme='dark'] {
  color-scheme: dark;
}

/* Light theme configuration */
[data-theme='light'] {
  color-scheme: light;
}
`;

  switchThemeMethod = `switchTheme(theme: 'light' | 'dark') {
  document.documentElement.setAttribute('data-theme', theme);
}`;

  switchTheme(theme: 'light' | 'dark') {
    document.body.setAttribute('data-theme', theme);
  }
}
