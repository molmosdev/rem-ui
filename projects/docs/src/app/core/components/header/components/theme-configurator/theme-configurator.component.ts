import { Component } from '@angular/core';
import { Button, Icon } from '../../../../../../../../lib/src/public-api';

@Component({
  selector: 'app-theme-configurator',
  templateUrl: './theme-configurator.component.html',
  styleUrl: './theme-configurator.component.css',
  imports: [Button, Icon],
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

  updateThemeVariable(
    variable: string,
    event: Event,
    mode: 'light' | 'dark'
  ): void {
    const value = (event.target as HTMLInputElement).value;
    const currentLightValue =
      mode === 'light' ? value : this.getVariableValue(variable, 'light');
    const currentDarkValue =
      mode === 'dark' ? value : this.getVariableValue(variable, 'dark');
    const combinedValue = `light-dark(${currentLightValue}, ${currentDarkValue})`;
    document.body.style.setProperty(variable, combinedValue);
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

  getTextColor(backgroundColor: string): string {
    // Convierte el color hexadecimal a RGB
    const hex = backgroundColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Calcula la luminancia relativa
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    // Devuelve negro (#000000) si el color es claro, blanco (#FFFFFF) si es oscuro
    return luminance > 128 ? '#000000' : '#FFFFFF';
  }

  resolveColor(value: string): string {
    // Si el valor es `color-mix`, calcula el resultado
    const colorMixMatch = value.match(
      /color-mix\(in srgb, (#[0-9a-fA-F]{6}), (#[0-9a-fA-F]{6}) (\d+)%\)/
    );
    if (colorMixMatch) {
      const [, color1, color2, percentage] = colorMixMatch;
      return this.calculateColorMix(
        color1,
        color2,
        parseInt(percentage, 10) / 100
      );
    }

    // Si el valor es `transparent`, devuelve un color por defecto (ejemplo: blanco)
    if (value === 'transparent') {
      return '#ffffff'; // Puedes cambiar esto según tus necesidades
    }

    return value; // Devuelve el valor original si no es `color-mix` o `transparent`
  }

  calculateColorMix(
    color1: string,
    color2: string,
    percentage: number
  ): string {
    // Convierte los colores hexadecimales a RGB
    const hexToRgb = (hex: string) => {
      const bigint = parseInt(hex.replace('#', ''), 16);
      return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
      };
    };

    const rgbToHex = (r: number, g: number, b: number) =>
      `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);

    // Mezcla los colores según el porcentaje
    const r = Math.round(rgb1.r * (1 - percentage) + rgb2.r * percentage);
    const g = Math.round(rgb1.g * (1 - percentage) + rgb2.g * percentage);
    const b = Math.round(rgb1.b * (1 - percentage) + rgb2.b * percentage);

    return rgbToHex(r, g, b);
  }

  getVariableValue(variable: string, mode: 'light' | 'dark'): string {
    const value = getComputedStyle(document.body)
      .getPropertyValue(variable)
      .trim();
    const match = value.match(/light-dark\((.*?),\s*(.*?)\)/);
    const resolvedValue = match
      ? mode === 'light'
        ? match[1].trim()
        : match[2].trim()
      : value;

    const hexValue = this.resolveColor(resolvedValue);

    // Asegúrate de que el valor sea un color hexadecimal válido
    const isValidHex = /^#[0-9a-fA-F]{6}$/.test(hexValue);
    return isValidHex ? hexValue : '#000000'; // Devuelve un color predeterminado si no es válido
  }

  resetTheme(): void {
    this.baseVariables
      .concat(this.componentVariables, this.errorVariables)
      .forEach(variable => {
        document.body.style.removeProperty(variable);
      });
  }

  applyTheme(theme: {
    name: string;
    variables: Record<string, { light: string; dark: string }>;
  }): void {
    Object.entries(theme.variables).forEach(([key, value]) => {
      const combinedValue = `light-dark(${value.light}, ${value.dark})`;
      document.body.style.setProperty(key, combinedValue);
    });
  }

  getThemePreviewColors(theme: any): {
    background: string;
    foreground: string;
  } {
    const background = theme.variables['--bg-color'];
    const foreground = theme.variables['--text-color'];

    return {
      background: this.resolveColor(background.light),
      foreground: this.resolveColor(foreground.light),
    };
  }
}
