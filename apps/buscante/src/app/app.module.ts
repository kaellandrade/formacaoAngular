import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { LivroComponent } from './components/livro/livro.component';
import { ListaLivrosComponent } from './views/lista-livros/lista-livros.component';
import { ModalLivroComponent } from './views/modal-livro/modal-livro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutoriaPipe } from './pipes/autoria.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
