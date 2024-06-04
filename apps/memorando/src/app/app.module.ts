import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { CabecalhoComponent } from '../../components/cabecalho/Cabecalho.component';
import { ListaTarefasComponent } from '../../components/listar-tarefas/ListaTarefas.component';
import { MensagemComponent } from '../../components/mensagem/Mensagem.component';
import { RodapeComponent } from '../../components/rodape/Rodape.component';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AppRouteReuseStrategy } from './app-route-reuse-strategy';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    MensagemComponent,
    RodapeComponent,
    ListaTarefasComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: AppRouteReuseStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
