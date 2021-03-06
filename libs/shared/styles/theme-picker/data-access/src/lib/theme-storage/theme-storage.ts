/* eslint-disable no-empty */
import { EventEmitter, Injectable } from '@angular/core';

export interface SiteTheme {
  name: string;
  displayName?: string;
  accent: string;
  primary: string;
  isDark?: boolean;
  isDefault?: boolean;
}

@Injectable()
export class ThemeStorage {
  // TODO: maybe think about providing this storage ky with DI
  static storageKey = 'theme-storage-current-name';

  onThemeUpdate: EventEmitter<SiteTheme> = new EventEmitter<SiteTheme>();

  storeTheme(theme: SiteTheme) {
    try {
      window.localStorage[ThemeStorage.storageKey] = theme.name;
    } catch {}

    this.onThemeUpdate.emit(theme);
  }

  getStoredThemeName(): string | null {
    try {
      return window.localStorage[ThemeStorage.storageKey] || null;
    } catch {
      return null;
    }
  }

  clearStorage() {
    try {
      window.localStorage.removeItem(ThemeStorage.storageKey);
    } catch {}
  }
}
