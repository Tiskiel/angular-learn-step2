import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { FormsModule } from '@angular/forms';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { EurtobtcPipe } from './shared/eurtobtc.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    EurtobtcPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
