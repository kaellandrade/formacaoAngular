import { CommonModule } from '@angular/common';
import { Component, effect, inject, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AudioService } from '../../services/audio.service';
import { ContextService, ContextType } from '../../services/context.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-timer-control',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './timer-control.component.html',
  styleUrl: './timer-control.component.scss',
})
export class TimerControlComponent {
  timerFormat = '';

  isTimerStarted = false;

  timerInSeconds = 30;

  hasPlaySong = false;
  context: WritableSignal<ContextType>;

  private intervalId: any;

  private contextService = inject(ContextService);
  private audioService = inject(AudioService);

  constructor(private notificationService: NotificationService) {
    this.context = this.contextService.contextSignal$;
    effect(() => {
      this.setTimerSecond();
      this.configTimer();
    });
  }

  onStartClick(): void {
    this.intervalId = setInterval(() => {
      this.countdown();
    }, 1000);

    this.isTimerStarted = true;
    this.audioService.play('play');
  }

  onPauseClick(): void {
    this.isTimerStarted = false;
    clearInterval(this.intervalId);

    this.audioService.play('pause');
  }

  onChangeContext(context: ContextType): void {
    this.contextService.updateContext(context);
  }

  onToggleMusicClick(): void {
    if (this.hasPlaySong) {
      this.audioService.play('environment');
      return;
    }

    this.audioService.stop('environment');
  }

  private countdown(): void {
    if (this.timerInSeconds <= 0) {
      this.audioService.play('beep');

      this.resetTimer();
      this.setTimerSecond();
      this.configTimer();

      this.sendNotification();
      return;
    }

    this.timerInSeconds -= 1;
    this.configTimer();
  }

  private async sendNotification(): Promise<void> {
    try {
      await this.notificationService.requestPermission();
      const context = this.context();

      if (context.includes('descanso')) {
        const title = 'Notificação';
        const options: NotificationOptions = {
          body: 'Tempo de descanso finalizado!',
        };
        this.notificationService.showNotification(title, options);
        return;
      }
      const title = 'Notificação';
      const options: NotificationOptions = {
        body: 'Tempo de foco finalizado!',
      };
      this.notificationService.showNotification(title, options);
    } catch (error) {
      console.error('error ao enviar notificação:', error);
    }
  }

  private resetTimer(): void {
    this.isTimerStarted = false;
    clearInterval(this.intervalId);
  }

  private configTimer(): void {
    this.timerFormat = new Date(this.timerInSeconds * 1000).toLocaleTimeString(
      'pt-Br',
      { minute: '2-digit', second: '2-digit' },
    );
  }

  private setTimerSecond(): void {
    switch (this.context()) {
      case 'foco':
        this.timerInSeconds = 30;
        break;
      case 'descanso-curto':
        this.timerInSeconds = 5;
        break;
      case 'descanso-longo':
        this.timerInSeconds = 15;
        break;
    }
  }
}
