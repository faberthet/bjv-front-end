import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IntroComponent } from './pages/intro/intro.component';
import { SentComponent } from './pages/contact/sent/sent.component';


const routes: Routes = [
  {path: '', component: HomeComponent,
    children:[  
      {path: '', component: IntroComponent}]
  },
  // {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contact/sent', component: SentComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
