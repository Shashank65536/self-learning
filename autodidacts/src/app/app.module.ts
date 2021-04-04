import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbPopoverModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShashankModule } from './shashank/shashank.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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
