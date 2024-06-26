import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SharedUiComponent } from '@formacao/shared-ui';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { LivroComponent } from './components/livro/livro.component';
import { ModalLivroComponent } from './components/modal-livro/modal-livro.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { ListaLivrosComponent } from './pages/lista-livros/lista-livros.component';
import { AutoriaPipe } from './pipes/autoria.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    LivroComponent,
    ListaLivrosComponent,
    ModalLivroComponent,
    AutoriaPipe,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    DividerModule,
    DialogModule,
    BrowserAnimationsModule,
    SharedUiComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
