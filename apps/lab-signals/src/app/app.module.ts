import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonDirective } from 'primeng/button';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EffectsComponent } from './effects/effects.component';
import { SignalsIntroComponent } from './signals-intro/signals-intro.component';

@NgModule({
  declarations: [AppComponent, SignalsIntroComponent, EffectsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    // RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    ButtonDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
