import { Route } from '@angular/router';

import { EffectsComponent } from './effects/effects.component';
import { SignalsIntroComponent } from './signals-intro/signals-intro.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'elements', pathMatch: 'full' },
  { path: 'intro', component: SignalsIntroComponent },
  { path: 'effects', component: EffectsComponent },
];
