import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { BannerComponent } from './shared/components/banner/banner.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { TaskManagerComponent } from './shared/components/task-manager/task-manager.component';
import { TimerControlComponent } from './shared/components/timer-control/timer-control.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    TimerControlComponent,
    TaskManagerComponent,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
