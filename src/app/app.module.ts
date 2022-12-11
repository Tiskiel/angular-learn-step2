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
import { ExerciceComponent } from './components/exercice/exercice.component';
import { Exo1Component } from './components/exercice/exo1/exo1.component';
import { TotimePipe } from './shared/totime.pipe';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { EnfantComponent } from './components/demo/demo4/enfant/enfant.component';
import { Exo2Component } from './components/exercice/exo2/exo2.component';
import { EnfantExo2Component } from './components/exercice/exo2/enfant-exo2/enfant-exo2.component';
import { Exo3Component } from './components/exercice/exo3/exo3.component';
import { EnfantExo3Component } from './components/exercice/exo3/enfant-exo3/enfant-exo3.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    EurtobtcPipe,
    ExerciceComponent,
    Exo1Component,
    TotimePipe,
    Demo3Component,
    Demo4Component,
    EnfantComponent,
    Exo2Component,
    EnfantExo2Component,
    Exo3Component,
    EnfantExo3Component,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
