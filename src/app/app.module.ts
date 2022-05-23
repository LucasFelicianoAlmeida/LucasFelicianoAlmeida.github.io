import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Route, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CardComponent } from './components/card/card.component';
import { PillComponent } from './components/pill/pill.component';
import { TopicPipe } from './pipes/topic/topic.pipe';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie'; // add this line


export function playerFactory() { // add this line
  return import('lottie-web'); // add this line
} 

const routes: Route[] = 
[
  {path: 'home', component: HomeComponent },
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path:'**',redirectTo:'home'},
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavMenuComponent,
    ProjectsComponent,
    CardComponent,
    PillComponent,
    TopicPipe,
    TopOfPageComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    LottieModule.forRoot({ player: playerFactory, useWebWorker: true })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
