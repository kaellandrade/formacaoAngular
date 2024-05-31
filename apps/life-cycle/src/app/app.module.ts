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
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ToolbarModule } from 'primeng/toolbar';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { BlockUIModule } from 'primeng/blockui';
import { ButtonGroupModule } from 'primeng/buttongroup';

@NgModule({
  declarations: [AppComponent, InputComponent, ItemComponent],
  imports: [BrowserModule,
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
    BlockUIModule, ButtonGroupModule
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
