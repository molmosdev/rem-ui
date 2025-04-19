import { Component } from '@angular/core';
import { CodeBlockComponent } from '../components/shared/components/code-block.component';
import { Icon, Button, Range } from '../../../../../lib/src/public-api';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ColorPicker } from '../../../../../lib/src/core/components/color-picker/color-picker.component';

interface ThemeVariables {
  root: Record<string, string>;
  light: Record<string, string>;
  dark: Record<string, string>;
}

@Component({
  selector: 'article[app-theming]',
  imports: [
    CodeBlockComponent,
    Button,
    Icon,
    Range,
    ReactiveFormsModule,
    ColorPicker,
  ],
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
  --secondary: light-dark(var(--white), var(--black));
  --secondary-foreground: light-dark(var(--black), var(--white));
  --secondary-border-color: light-dark(
    color-mix(in srgb, var(--white), var(--black) 8%),
    color-mix(in srgb, var(--black), var(--white) 5%)
  );
  --input-background: light-dark(
    color-mix(in srgb, var(--bg-color), var(--black) 6%),
    color-mix(in srgb, var(--bg-color), var(--white) 3%)
  );
  --input-foreground: light-dark(var(--black), var(--white));

  /* Error colors */
  --error-foreground: light-dark(#c40000, #ff6b6b);
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
    document.documentElement.setAttribute('data-theme', theme);
  }

  themeVariables = new FormGroup({
    root: new FormGroup({
      '--radius': new FormControl('0.5'),
    }),
    light: new FormGroup({
      '--bg-color': new FormControl('#ffffff'),
      '--text-color': new FormControl('#0a0a0a'),
      '--background': new FormControl('#ffffff'),
      '--foreground': new FormControl('#0a0a0a'),
      '--border-color': new FormControl('#e6e6e6'), // Precomputed value
      '--primary': new FormControl('#0a0a0a'),
      '--primary-foreground': new FormControl('#ffffff'),
      '--primary-border-color': new FormControl('#0a0a0a'),
      '--secondary': new FormControl('#ffffff'),
      '--secondary-foreground': new FormControl('#0a0a0a'),
      '--secondary-border-color': new FormControl('#e6e6e6'), // Precomputed value
      '--input-background': new FormControl('#f2f2f2'), // Precomputed value
      '--input-foreground': new FormControl('#0a0a0a'),
      '--error-foreground': new FormControl('#c40000'),
      '--error': new FormControl('#fff0f0'),
    }),
    dark: new FormGroup({
      '--bg-color': new FormControl('#0a0a0a'),
      '--text-color': new FormControl('#ffffff'),
      '--background': new FormControl('#0a0a0a'),
      '--foreground': new FormControl('#ffffff'),
      '--border-color': new FormControl('#1a1a1a'), // Precomputed value
      '--primary': new FormControl('#ffffff'),
      '--primary-foreground': new FormControl('#0a0a0a'),
      '--primary-border-color': new FormControl('#ffffff'),
      '--secondary': new FormControl('#000000'),
      '--secondary-foreground': new FormControl('#ffffff'),
      '--secondary-border-color': new FormControl('#1f1f1f'), // Precomputed value
      '--input-background': new FormControl('#1d1d1d'), // Precomputed value
      '--input-foreground': new FormControl('#ffffff'),
      '--error-foreground': new FormControl('#ff6b6b'),
      '--error': new FormControl('#382d2d'),
    }),
  });

  exampleThemes = [
    {
      name: 'Basic',
      variables: {
        '--bg-color': { light: '#ffffff', dark: '#0a0a0a' },
        '--text-color': { light: '#0a0a0a', dark: '#ffffff' },
        '--background': { light: '#ffffff', dark: '#0a0a0a' },
        '--foreground': { light: '#0a0a0a', dark: '#ffffff' },
        '--border-color': { light: '#e6e6e6', dark: '#1a1a1a' }, // Precomputed values
        '--primary': { light: '#0a0a0a', dark: '#ffffff' },
        '--primary-foreground': { light: '#ffffff', dark: '#0a0a0a' },
        '--primary-border-color': { light: '#0a0a0a', dark: '#ffffff' },
        '--secondary': { light: '#ffffff', dark: '#000000' },
        '--secondary-foreground': { light: '#0a0a0a', dark: '#ffffff' },
        '--secondary-border-color': { light: '#e6e6e6', dark: '#1f1f1f' }, // Precomputed values
        '--input-background': { light: '#f2f2f2', dark: '#1d1d1d' }, // Precomputed values
        '--input-foreground': { light: '#0a0a0a', dark: '#ffffff' },
        '--error-foreground': { light: '#c40000', dark: '#ff6b6b' },
        '--error': { light: '#fff0f0', dark: '#382d2d' },
      },
    },
    {
      name: 'Ocean',
      variables: {
        '--bg-color': { light: '#1b6f50', dark: '#0a1f16' },
        '--text-color': { light: '#ffffff', dark: '#d9f2ee' },
        '--background': { light: '#1b6f50', dark: '#0a1f16' },
        '--foreground': { light: '#ffffff', dark: '#d9f2ee' },
        '--border-color': { light: '#14543c', dark: '#07120d' },
        '--primary': { light: '#28a074', dark: '#0f3a2a' },
        '--primary-foreground': { light: '#ffffff', dark: '#d9f2ee' },
        '--primary-border-color': { light: '#1b6f50', dark: '#0a1f16' },
        '--secondary': { light: '#3cb88a', dark: '#14543c' },
        '--secondary-foreground': { light: '#ffffff', dark: '#d9f2ee' },
        '--secondary-border-color': { light: '#28a074', dark: '#0f3a2a' },
        '--input-background': { light: '#3cb88a', dark: '#14543c' },
        '--input-foreground': { light: '#ffffff', dark: '#d9f2ee' },
        '--error-foreground': { light: '#ff4d4d', dark: '#ff9999' },
        '--error': { light: '#f9e6e6', dark: '#3a1f1f' },
      },
    },
    {
      name: 'Pastel Sky',
      variables: {
        '--bg-color': { light: '#a8d5e2', dark: '#2b4d5a' },
        '--text-color': { light: '#4a4a4a', dark: '#d9f2f7' },
        '--background': { light: '#a8d5e2', dark: '#2b4d5a' },
        '--foreground': { light: '#4a4a4a', dark: '#d9f2f7' },
        '--border-color': { light: '#87b8c9', dark: '#1f3a42' },
        '--primary': { light: '#87b8c9', dark: '#1f3a42' },
        '--primary-foreground': { light: '#ffffff', dark: '#d9f2f7' },
        '--primary-border-color': { light: '#87b8c9', dark: '#1f3a42' },
        '--secondary': { light: '#d4eaf1', dark: '#2b4d5a' },
        '--secondary-foreground': { light: '#4a4a4a', dark: '#d9f2f7' },
        '--secondary-border-color': { light: '#a8d5e2', dark: '#2b4d5a' },
        '--input-background': { light: '#d4eaf1', dark: '#2b4d5a' },
        '--input-foreground': { light: '#4a4a4a', dark: '#d9f2f7' },
        '--error-foreground': { light: '#ff6b6b', dark: '#ff9999' },
        '--error': { light: '#ffe6e6', dark: '#3a1f1f' },
      },
    },
    {
      name: 'Sunset Glow',
      variables: {
        '--bg-color': { light: '#ffcccb', dark: '#4a1f1f' },
        '--text-color': { light: '#4a4a4a', dark: '#ffe6e6' },
        '--background': { light: '#ffcccb', dark: '#4a1f1f' },
        '--foreground': { light: '#4a4a4a', dark: '#ffe6e6' },
        '--border-color': { light: '#ff9999', dark: '#3a1a1a' },
        '--primary': { light: '#ff6666', dark: '#992222' },
        '--primary-foreground': { light: '#ffffff', dark: '#ffe6e6' },
        '--primary-border-color': { light: '#ff9999', dark: '#4a1f1f' },
        '--secondary': { light: '#ff9999', dark: '#662222' },
        '--secondary-foreground': { light: '#4a4a4a', dark: '#ffe6e6' },
        '--secondary-border-color': { light: '#ffcccb', dark: '#3a1a1a' },
        '--input-background': { light: '#ff9999', dark: '#662222' },
        '--input-foreground': { light: '#4a4a4a', dark: '#ffe6e6' },
        '--error-foreground': { light: '#ff3333', dark: '#ff6666' },
        '--error': { light: '#ffe6e6', dark: '#4a1f1f' },
      },
    },
    {
      name: 'Forest Mist',
      variables: {
        '--bg-color': { light: '#d4e9d7', dark: '#1a2a1a' },
        '--text-color': { light: '#2a2a2a', dark: '#d9f2d9' },
        '--background': { light: '#d4e9d7', dark: '#1a2a1a' },
        '--foreground': { light: '#2a2a2a', dark: '#d9f2d9' },
        '--border-color': { light: '#a8c4a8', dark: '#0f1f0f' },
        '--primary': { light: '#8fbf8f', dark: '#2a4a2a' },
        '--primary-foreground': { light: '#ffffff', dark: '#d9f2d9' },
        '--primary-border-color': { light: '#a8c4a8', dark: '#1a2a1a' },
        '--secondary': { light: '#c4e1c4', dark: '#2a4a2a' },
        '--secondary-foreground': { light: '#2a2a2a', dark: '#d9f2d9' },
        '--secondary-border-color': { light: '#d4e9d7', dark: '#1a2a1a' },
        '--input-background': { light: '#c4e1c4', dark: '#2a4a2a' },
        '--input-foreground': { light: '#2a2a2a', dark: '#d9f2d9' },
        '--error-foreground': { light: '#ff4d4d', dark: '#ff9999' },
        '--error': { light: '#f9e6e6', dark: '#3a1f1f' },
      },
    },
    {
      name: 'Midnight Blue',
      variables: {
        '--bg-color': { light: '#b3cde0', dark: '#0a1a2a' },
        '--text-color': { light: '#2a2a2a', dark: '#d9e6f2' },
        '--background': { light: '#b3cde0', dark: '#0a1a2a' },
        '--foreground': { light: '#2a2a2a', dark: '#d9e6f2' },
        '--border-color': { light: '#8faac4', dark: '#07121f' },
        '--primary': { light: '#5a8fa1', dark: '#1a3a4a' },
        '--primary-foreground': { light: '#ffffff', dark: '#d9e6f2' },
        '--primary-border-color': { light: '#8faac4', dark: '#0a1a2a' },
        '--secondary': { light: '#a8d5e2', dark: '#1a3a4a' },
        '--secondary-foreground': { light: '#2a2a2a', dark: '#d9e6f2' },
        '--secondary-border-color': { light: '#b3cde0', dark: '#0a1a2a' },
        '--input-background': { light: '#a8d5e2', dark: '#1a3a4a' },
        '--input-foreground': { light: '#2a2a2a', dark: '#d9e6f2' },
        '--error-foreground': { light: '#ff6b6b', dark: '#ff9999' },
        '--error': { light: '#ffe6e6', dark: '#3a1f1f' },
      },
    },
  ];

  constructor() {
    this.themeVariables.valueChanges.subscribe(value => {
      this.updateThemeVariables(value as ThemeVariables);
    });
  }

  updateThemeVariables(themeVariables: ThemeVariables) {
    const rootVariables = themeVariables.root || {};
    const lightVariables = themeVariables.light || {};
    const darkVariables = themeVariables.dark || {};

    // Update root variables
    Object.entries(rootVariables).forEach(([variable, value]) => {
      const finalValue = variable === '--radius' ? `${value}rem` : value;
      document.documentElement.style.setProperty(variable, finalValue);
    });

    // Update light-dark variables
    Object.keys(lightVariables).forEach(variable => {
      const lightValue = lightVariables[variable];
      const darkValue = darkVariables[variable];
      const combinedValue = `light-dark(${lightValue}, ${darkValue})`;
      document.documentElement.style.setProperty(variable, combinedValue);
    });
  }

  applyExampleTheme(themeName: string) {
    const selectedTheme = this.exampleThemes.find(
      theme => theme.name === themeName
    );
    if (!selectedTheme) return;

    const { variables } = selectedTheme;

    // Update form values
    this.themeVariables.patchValue({
      root: { '--radius': '0.5' },
      light: Object.fromEntries(
        Object.entries(variables).map(([key, values]) => [key, values.light])
      ),
      dark: Object.fromEntries(
        Object.entries(variables).map(([key, values]) => [key, values.dark])
      ),
    });
  }
}
