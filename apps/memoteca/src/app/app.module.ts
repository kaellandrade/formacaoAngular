import { NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import { SkeletonModule } from 'primeng/skeleton';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';
import { BotaoCarregarMaisComponent } from './componentes/pensamentos/listar-pensamento/botao-carregar-mais/botao-carregar-mais.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { PensamentoComponent } from './componentes/pensamentos/pensamento/pensamento.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
    ListarPensamentoComponent,
    PensamentoComponent,
    EditarPensamentoComponent,
    BotaoCarregarMaisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    TooltipModule,
    CalendarModule,
    BrowserModule,
    BrowserAnimationsModule,
    RippleModule,
    IconFieldModule,
    InputIconModule,
    InputTextareaModule,
    InputTextModule,
    CheckboxModule,
    CardModule,
    NgOptimizedImage,
    ChipsModule,
    PanelModule,
    DividerModule,
    ButtonGroupModule,
    ToastModule,
    ConfirmDialogModule,
    SkeletonModule,
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
