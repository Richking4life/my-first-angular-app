import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarmingAlertComponent } from './warming-alert/warming-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DisplayButtonComponent } from './display-button/display-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarmingAlertComponent,
    SuccessAlertComponent,
    DisplayButtonComponent
  ],
  imports: [
    BrowserModule
    ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
