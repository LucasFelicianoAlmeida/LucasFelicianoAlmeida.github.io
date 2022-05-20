import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Route, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MyappsComponent } from './components/myapps/myapps.component';
import { CardComponent } from './components/card/card.component';
import { PillComponent } from './components/pill/pill.component';
import { TopicPipe } from './pipes/topic/topic.pipe';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';

const routes: Route[] = 
[
  {path: 'home', component: HomeComponent },
  {path: '', component: HomeComponent},
  {path: 'myapps', component: MyappsComponent},
  {path:'**',redirectTo:'home'},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavMenuComponent,
    MyappsComponent,
    CardComponent,
    PillComponent,
    TopicPipe,
    TopOfPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
