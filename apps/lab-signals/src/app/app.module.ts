import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonDirective } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SliderModule } from 'primeng/slider';

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
    SliderModule,
    InputTextModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
