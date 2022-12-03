import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/header/game/game.component';
import { LoginComponent } from './components/header/player/login/login.component';
import { RegisterComponent } from './components/header/player/register/register.component';
import { AboutusComponent } from './components/header/contactus/aboutus/aboutus.component';
import { SupportComponent } from './components/header/contactus/support/support.component';
import { NewsComponent } from './components/header/contactus/news/news.component';
import { FaqComponent } from './components/header/contactus/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent,
    SupportComponent,
    NewsComponent,
    FaqComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
