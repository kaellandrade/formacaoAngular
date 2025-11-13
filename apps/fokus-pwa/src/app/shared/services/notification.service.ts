import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  requestPermission(): Promise<NotificationPermission> {
    if (this.notificationSupported()) {
      return Promise.reject('Notifications not supported!');
    }
    return window.Notification.requestPermission();
  }
  showNotification(title: string, options?: NotificationOptions): void {
    if (!this.notificationSupported()) {
      console.warn('Notifications not supported!');
      return;
    }
    if (window.Notification.permission === 'granted') {
      new window.Notification(title, options);
      return;
    }
    console.warn('Notifications not supported!');
  }
  /**
   * Verifica se temos suporte a notificações
   * @returns
   */
  private notificationSupported(): boolean {
    return isPlatformBrowser(this.platformId && 'Noticication' in window); // verificando também se o browser tem suporte a notificações.
  }
}

/**
 * Notificação atrelada ao windows... (caso seja browser...)
 */
