import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SucessoCadastroComponent } from './sucesso-cadastro/sucesso-cadastro.component';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { MaiorIdadeDirective } from './directives/maior-idade.directive';
import { HttpClientModule } from '@angular/common/http';
import { ValidandoCepDirective } from './directives/validando-cep.directive';
import { SharedUiComponent } from '@formacao/shared-ui';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CadastroComponent,
    SucessoCadastroComponent,
    MensagemComponent,
    MaiorIdadeDirective,
    ValidandoCepDirective,
    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, SharedUiComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
