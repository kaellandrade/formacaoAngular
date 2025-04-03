import { Route } from '@angular/router';

import { ComputedSignalComponent } from './computed-signal/computed-signal.component';
import { EffectsComponent } from './effects/effects.component';
import { ElementDetailsComponent } from './element-details/element-details.component';
import { ElementListComponent } from './element-list/element-list.component';
import { SignalsIntroComponent } from './signals-intro/signals-intro.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'elements', pathMatch: 'full' },
  { path: 'intro', component: SignalsIntroComponent },
  { path: 'effects', component: EffectsComponent },
  { path: 'computed-signal', component: ComputedSignalComponent },
  {
    path: 'elements',
    children: [
      {
        path: '',
        component: ElementListComponent,
        outlet: 'list',
      },
      {
        path: '',
        component: ElementDetailsComponent,
        outlet: 'details',
      },
    ],
  },
];
