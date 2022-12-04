import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/header/contactus/aboutus/aboutus.component';
import { FaqComponent } from './components/header/contactus/faq/faq.component';
import { NewsComponent } from './components/header/contactus/news/news.component';
import { SupportComponent } from './components/header/contactus/support/support.component';
import { GameComponent } from './components/body/game/game.component';
import { SearchGameComponent } from './components/body/search-game/search-game.component';
import { Error404Component } from './components/shared/error404/error404.component';

const routes: Routes = [
  { path: "Search", component: SearchGameComponent },
  { path: "Search/:searchRoute", component: SearchGameComponent },
  { path: "Games", component: GameComponent },
  { path: 'Support', component: SupportComponent },
  { path: 'News', component: NewsComponent },
  { path: 'FAQ', component: FaqComponent },
  { path: 'AboutUs', component: AboutusComponent },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
