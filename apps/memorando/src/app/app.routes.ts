import { Route } from '@angular/router';

import { ListaTarefasComponent } from '../../components/listar-tarefas/ListaTarefas.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'listaTarefas',
    pathMatch: 'full',
    data: {
      reuseComponent: true,
    },
  },
  {
    path: 'listaTarefas',
    component: ListaTarefasComponent,
    data: {
      reuseComponent: true,
    },
  },
];
