import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbPopoverModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShashankModule } from './shashank/shashank.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPopoverModule,
    ShashankModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
