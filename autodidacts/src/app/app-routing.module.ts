import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './shashank/hello-world/hello-world.component';
import { ShashankModule } from './shashank/shashank.module';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'shashank', component: HelloWorldComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
