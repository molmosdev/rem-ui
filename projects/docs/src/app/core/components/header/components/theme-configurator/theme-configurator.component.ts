import { Component } from '@angular/core';
import { Button } from '../../../../../../../../lib/src/public-api';

@Component({
  selector: 'app-theme-configurator',
  templateUrl: './theme-configurator.component.html',
  styleUrl: './theme-configurator.component.css',
  imports: [Button],
})
export class ThemeConfiguratorComponent {
  baseVariables = [
    '--bg-color',
    '--text-color',
    '--background',
    '--foreground',
    '--border-color',
  ];
  componentVariables = [
    '--primary',
    '--primary-foreground',
    '--primary-border-color',
    '--secondary',
    '--secondary-foreground',
    '--secondary-border-color',
    '--input-background',
    '--input-foreground',
  ];
  errorVariables = ['--error-foreground', '--error'];

  exampleThemes = [
    {
      name: 'Light',
      background: 'var(--white)',
      foreground: 'var(--black)',
      variables: {
        '--bg-color': 'var(--white)',
        '--text-color': 'var(--black)',
        '--background': 'var(--white)',
        '--foreground': 'var(--black)',
        '--border-color': 'color-mix(in srgb, var(--white), var(--black) 8%)',
        '--primary': 'var(--black)',
        '--primary-foreground': 'var(--white)',
        '--primary-border-color': 'var(--black)',
        '--secondary': 'transparent',
        '--secondary-foreground': 'var(--black)',
        '--secondary-border-color':
          'color-mix(in srgb, var(--white), var(--black) 8%)',
        '--input-background':
          'color-mix(in srgb, var(--bg-color), var(--black) 1%)',
        '--input-foreground': 'var(--black)',
        '--error-foreground': '#c40000ab',
        '--error': '#fff0f0',
      },
    },
    {
      name: 'Dark',
      background: 'var(--black)',
      foreground: 'var(--white)',
      variables: {
        '--bg-color': 'var(--black)',
        '--text-color': 'var(--white)',
        '--background': 'var(--black)',
        '--foreground': 'var(--white)',
        '--border-color': 'color-mix(in srgb, var(--black), var(--white) 10%)',
        '--primary': 'var(--white)',
        '--primary-foreground': 'var(--black)',
        '--primary-border-color': 'var(--white)',
        '--secondary': 'transparent',
        '--secondary-foreground': 'var(--white)',
        '--secondary-border-color':
          'color-mix(in srgb, var(--black), var(--white) 5%)',
        '--input-background':
          'color-mix(in srgb, var(--bg-color), var(--white) 1%)',
        '--input-foreground': 'var(--white)',
        '--error-foreground': '#ff6b6b',
        '--error': '#382d2d',
      },
    },
    {
      name: 'Ocean',
      background: '#2e8b57',
      foreground: '#ffffff',
      variables: {
        '--bg-color': '#2e8b57',
        '--text-color': '#ffffff',
        '--background': '#2e8b57',
        '--foreground': '#ffffff',
        '--border-color': '#1e5f3a',
        '--primary': '#1e5f3a',
        '--primary-foreground': '#ffffff',
        '--primary-border-color': '#1e5f3a',
        '--secondary': '#3c9d70',
        '--secondary-foreground': '#ffffff',
        '--secondary-border-color': '#2e8b57',
        '--input-background': '#3c9d70',
        '--input-foreground': '#ffffff',
        '--error-foreground': '#ff6b6b',
        '--error': '#f0e6e6',
      },
    },
    {
      name: 'Pastel Sky',
      background: '#a8d5e2',
      foreground: '#4a4a4a',
      variables: {
        '--bg-color': '#a8d5e2',
        '--text-color': '#4a4a4a',
        '--background': '#a8d5e2',
        '--foreground': '#4a4a4a',
        '--border-color': '#87b8c9',
        '--primary': '#87b8c9',
        '--primary-foreground': '#ffffff',
        '--primary-border-color': '#87b8c9',
        '--secondary': '#d4eaf1',
        '--secondary-foreground': '#4a4a4a',
        '--secondary-border-color': '#a8d5e2',
        '--input-background': '#d4eaf1',
        '--input-foreground': '#4a4a4a',
        '--error-foreground': '#ff6b6b',
        '--error': '#ffe6e6',
      },
    },
    {
      name: 'Soft Lavender',
      background: '#e6e6fa',
      foreground: '#4a4a4a',
      variables: {
        '--bg-color': '#e6e6fa',
        '--text-color': '#4a4a4a',
        '--background': '#e6e6fa',
        '--foreground': '#4a4a4a',
        '--border-color': '#cfcfe8',
        '--primary': '#cfcfe8',
        '--primary-foreground': '#ffffff',
        '--primary-border-color': '#cfcfe8',
        '--secondary': '#f4f4fc',
        '--secondary-foreground': '#4a4a4a',
        '--secondary-border-color': '#e6e6fa',
        '--input-background': '#f4f4fc',
        '--input-foreground': '#4a4a4a',
        '--error-foreground': '#ff6b6b',
        '--error': '#ffe6e6',
      },
    },
    {
      name: 'Corporate Blue',
      background: '#f4f7fc',
      foreground: '#1a1a1a',
      variables: {
        '--bg-color': '#f4f7fc',
        '--text-color': '#1a1a1a',
        '--background': '#f4f7fc',
        '--foreground': '#1a1a1a',
        '--border-color': '#d1d9e6',
        '--primary': '#0056b3',
        '--primary-foreground': '#ffffff',
        '--primary-border-color': '#004494',
        '--secondary': '#e9eff8',
        '--secondary-foreground': '#1a1a1a',
        '--secondary-border-color': '#d1d9e6',
        '--input-background': '#ffffff',
        '--input-foreground': '#1a1a1a',
        '--error-foreground': '#d9534f',
        '--error': '#fbe9e7',
      },
    },
  ];

  updateThemeVariable(variable: string, event: any): void {
    const value = event.target.value;
    document.body.style.setProperty(variable, value);
  }

  getComputedStyle(variable: string): string {
    return getComputedStyle(document.body).getPropertyValue(variable).trim();
  }

  getVariableDisplayName(variable: string): string {
    const variableNames: Record<string, string> = {
      '--bg-color': 'Background Color',
      '--text-color': 'Text Color',
      '--background': 'UI Background',
      '--foreground': 'UI Foreground',
      '--border-color': 'Border Color',
      '--primary': 'Primary Color',
      '--primary-foreground': 'Primary Text Color',
      '--primary-border-color': 'Primary Border Color',
      '--secondary': 'Secondary Color',
      '--secondary-foreground': 'Secondary Text Color',
      '--secondary-border-color': 'Secondary Border Color',
      '--input-background': 'Input Background',
      '--input-foreground': 'Input Text Color',
      '--error-foreground': 'Error Text Color',
      '--error': 'Error Background',
    };
    return variableNames[variable] || variable;
  }

  getVariableValue(variable: string): string {
    return getComputedStyle(document.body).getPropertyValue(variable).trim();
  }

  resetTheme(): void {
    this.baseVariables
      .concat(this.componentVariables, this.errorVariables)
      .forEach(variable => {
        document.body.style.removeProperty(variable);
      });
  }

  applyTheme(theme: { name: string; variables: Record<string, string> }): void {
    Object.entries(theme.variables).forEach(([key, value]) => {
      document.body.style.setProperty(key, value);
    });
  }
}
