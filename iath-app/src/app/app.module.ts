import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';

import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ArrowComponent } from './case-studies/arrow/arrow.component';
import { StuntpuppyComponent } from './case-studies/stuntpuppy/stuntpuppy.component';
import { LacekComponent } from './case-studies/lacek/lacek.component';

import { ScrollToModule } from 'ng2-scroll-to-el';
import { AboutComponent } from './views/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    NotFoundComponent,
    ArrowComponent,
    StuntpuppyComponent,
    LacekComponent,
    AboutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ScrollToModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
