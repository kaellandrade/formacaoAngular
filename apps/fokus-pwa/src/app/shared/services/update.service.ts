import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { filter, interval, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  private readonly UM_MINUTO = 60 * 1000;
  // TODO: verificar lint para desabilitar isso
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private swUpdate: SwUpdate) {
    this.inicializeUpdateChecks();
  }

  inicializeUpdateChecks(): void {
    if (!this.swUpdate.isEnabled) return;

    interval(this.UM_MINUTO).subscribe(() => this.checkForUpdate());

    this.swUpdate.versionUpdates
      .pipe(
        // eslint-disable-next-line no-console
        tap((event) => console.log(event)),
        filter((event) => event.type === 'VERSION_READY'),
      )
      .subscribe(() => this.promptUserToupdate());

    this.swUpdate.unrecoverable.subscribe(() => {
      alert('Um erro ocorreu. O aplicativo será recarregado.');
      window.location.reload();
    });
  }

  promptUserToupdate(): void {
    if (confirm('Nova versão disponível. Deseja atualizar agora ?')) {
      this.swUpdate
        .activateUpdate()
        .then(() => window.location.reload())
        // eslint-disable-next-line no-console
        .catch((error) => console.log('Erro ao ativar atualização: ', error));
    }
  }

  async checkForUpdate(): Promise<boolean> {
    if (!this.swUpdate.isEnabled) return false;

    try {
      return await this.swUpdate.checkForUpdate();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error ao verificar a atualização', error);
      return false;
    }
  }
}
