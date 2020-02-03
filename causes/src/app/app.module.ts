import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LeftComponent } from './left/left.component';
import { RightComponent } from "./right/right.component";

@NgModule({
  declarations: [
    AppComponent,
    RightComponent,
    LeftComponent

  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
