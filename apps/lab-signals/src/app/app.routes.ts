import { Route } from '@angular/router';

import { EffectsComponent } from './effects/effects.component';
import { ElementDetailsComponent } from './element-details/element-details.component';
import { ElementListComponent } from './element-list/element-list.component';
import { SignalsIntroComponent } from './signals-intro/signals-intro.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'elements', pathMatch: 'full' },
  { path: 'intro', component: SignalsIntroComponent },
  { path: 'effects', component: EffectsComponent },
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
