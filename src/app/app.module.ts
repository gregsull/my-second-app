import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { WarningAlertComponent } from './warningalert/warningalert.component.ts'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WarningAlertComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
