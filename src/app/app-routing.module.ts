import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/header/contactus/aboutus/aboutus.component';
import { FaqComponent } from './components/header/contactus/faq/faq.component';
import { NewsComponent } from './components/header/contactus/news/news.component';
import { SupportComponent } from './components/header/contactus/support/support.component';
import { GameComponent } from './components/header/game/game.component';

const routes: Routes = [
  { path: 'Support', component: SupportComponent },
  { path: 'News', component: NewsComponent },
  { path: 'FAQ', component: FaqComponent },
  { path: 'AboutUs', component: AboutusComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
