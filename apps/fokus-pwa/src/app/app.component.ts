import { Component, OnInit } from '@angular/core';

import { UpdateService } from './shared/services/update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false,
})
export class AppComponent implements OnInit {
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private updateService: UpdateService) {}

  async ngOnInit(): Promise<void> {
    const hasUpdate = await this.updateService.checkForUpdate();
    if (hasUpdate) {
      // eslint-disable-next-line no-console
      console.log('Atualização encrontrada durante a incialização!');
    }
  }
}
