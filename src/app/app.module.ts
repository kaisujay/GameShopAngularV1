import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/body/game/game.component';
import { LoginComponent } from './components/header/player/login/login.component';
import { RegisterComponent } from './components/header/player/register/register.component';
import { AboutusComponent } from './components/header/contactus/aboutus/aboutus.component';
import { SupportComponent } from './components/header/contactus/support/support.component';
import { NewsComponent } from './components/header/contactus/news/news.component';
import { FaqComponent } from './components/header/contactus/faq/faq.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactusComponent } from './components/header/contactus/contactus.component';
import { PlayerComponent } from './components/header/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent,
    SupportComponent,
    NewsComponent,
    FaqComponent,
    HeaderComponent,
    ContactusComponent,
    PlayerComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
