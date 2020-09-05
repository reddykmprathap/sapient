import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,

  ],
  exports: [],

  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
