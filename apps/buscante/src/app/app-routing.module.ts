import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatoComponent } from './pages/contato/contato.component';
import { ListaLivrosComponent } from './pages/lista-livros/lista-livros.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-livros',
    pathMatch: 'full',
  },
  {
    path: 'lista-livros',
    component: ListaLivrosComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: 'contato',
    component: ContatoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
