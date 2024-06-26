import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatoComponent } from './pages/contato/contato.component';
import { ListaLivrosComponent } from './pages/lista-livros/lista-livros.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  {
    path: 'lista-livros',
    component: ListaLivrosComponent,
    title: 'Lista de livros',
  },
  {
    path: 'sobre',
    component: SobreComponent,
    title: 'Mais informações - Buscante',
  },
  {
    path: 'contato',
    component: ContatoComponent,
    title: 'Fale conosco - Buscante',
  },
  {
    path: '',
    redirectTo: 'lista-livros',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
