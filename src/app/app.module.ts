import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepagesComponent } from './pages/homepages/homepages.component';
import { ContactpagesComponent } from './pages/contactpages/contactpages.component';
import { ArtformspagesComponent } from './pages/artformspages/artformspages.component';
import { SignuppagesComponent } from './pages/signuppages/signuppages.component';
import { SigninpagesComponent } from './pages/signinpages/signinpages.component';
import { SiglepagesComponent } from './pages/siglepages/siglepages.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepagesComponent,
    ContactpagesComponent,
    ArtformspagesComponent,
    SignuppagesComponent,
    SigninpagesComponent,
    SiglepagesComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
