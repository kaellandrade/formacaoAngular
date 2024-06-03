import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BlockUIModule } from 'primeng/blockui';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { IconFieldModule } from 'primeng/iconfield';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { StyleClassModule } from 'primeng/styleclass';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [AppComponent, InputComponent, ItemComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    InputGroupAddonModule,
    InputGroupModule,
    DividerModule,
    CheckboxModule,
    IconFieldModule,
    InputIconModule,
    ToolbarModule,
    RippleModule,
    StyleClassModule,
    ConfirmDialogModule,
    ToastModule,
    BrowserAnimationsModule,
    ScrollPanelModule,
    ScrollTopModule,
    BlockUIModule,
    ButtonGroupModule,
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
