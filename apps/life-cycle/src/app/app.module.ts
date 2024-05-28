import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputComponent } from './components/input/input.component';
import { ItemComponent } from './components/item/item.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [AppComponent, InputComponent, ItemComponent],
  imports: [BrowserModule, FontAwesomeModule, FormsModule, InputTextModule, ButtonModule, CardModule, InputGroupAddonModule, InputGroupModule, DividerModule, CheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
