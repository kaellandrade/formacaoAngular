import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run memorando:serve:development',
        production: 'nx run memorando:serve:production',
      },
      ciWebServerCommand: 'nx run memorando:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
