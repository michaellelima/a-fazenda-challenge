import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http2ServerRequest } from 'http2';
import { AppComponent } from './app.component';
import { FazendaPageComponent } from './fazenda-page/fazenda-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FazendaPageComponent,
    Http2ServerRequest,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
