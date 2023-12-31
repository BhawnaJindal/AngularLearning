import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,MycomponentComponent, SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
