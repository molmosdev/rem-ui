import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode = signal(false);

  setDarkMode(value: boolean) {
    this.isDarkMode.set(value);
  }
}
