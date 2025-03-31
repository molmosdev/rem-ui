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
  customThemeExample = `
document.body.style.setProperty('--bg-color', '#f0f0f0');
document.body.style.setProperty('--text-color', '#333333');
document.body.style.setProperty('--primary', '#007bff');
document.body.style.setProperty('--primary-foreground', '#ffffff');

// Switch to dark theme
document.body.setAttribute('data-theme', 'dark');
  `;

  cssCode = `/* Base colors */
:root {
  --black: #0a0a0a;
  --white: #ffffff;
  --radius: 0.5rem;
}

/* Light theme */
body[data-theme='light'] {
  /* Base theme colors */
  --bg-color: var(--white);
  --text-color: var(--black);

  /* UI colors */
  --background: var(--bg-color);
  --foreground: var(--black);
  --border-color: color-mix(in srgb, var(--bg-color), var(--black) 8%);

  /* Component colors */
  --primary: var(--black);
  --primary-foreground: var(--white);
  --primary-border-color: var(--black);

  --secondary: transparent;
  --secondary-foreground: var(--text-color);
  --secondary-border-color: var(--border-color);

  --input-background: color-mix(in srgb, var(--bg-color), var(--black) 1%);
  --input-foreground: var(--text-color);

  /* Error colors */
  --error-foreground: #c40000ab;
  --error: #fff0f0;
}

/* Dark theme */
body[data-theme='dark'] {
  /* Base theme colors */
  --bg-color: var(--black);
  --text-color: var(--white);

  /* UI colors */
  --background: color-mix(in srgb, var(--bg-color), var(--white) 1%);
  --foreground: var(--text-color);
  --border-color: color-mix(in srgb, var(--bg-color), var(--white) 10%);

  /* Component colors */
  --primary: var(--white);
  --primary-foreground: var(--black);
  --primary-border-color: var(--white);

  --secondary: transparent;
  --secondary-foreground: var(--text-color);
  --secondary-border-color: color-mix(
    in srgb,
    var(--bg-color),
    var(--white) 5%
  );

  --input-background: color-mix(in srgb, var(--bg-color), var(--white) 1%);
  --input-foreground: var(--text-color);

  /* Error colors */
  --error-foreground: #ff6b6b;
  --error: #382d2d;
}`;

  switchTheme(theme: 'light' | 'dark') {
    document.body.setAttribute('data-theme', theme);
  }
}
