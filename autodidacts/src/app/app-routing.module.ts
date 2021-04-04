import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelloWorldComponent } from './shashank/hello-world/hello-world.component';
import { ShashankModule } from './shashank/shashank.module';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shashank', component: HelloWorldComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
