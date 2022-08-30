import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IntroComponent } from './pages/intro/intro.component';
import { SentComponent } from './pages/contact/sent/sent.component';
import { ArticlesAdminComponent } from './admin/articles-admin/articles-admin.component';
import { CreateArticleComponent } from './admin/articles-admin/create-article/create-article.component';
import { UpdateArticleComponent } from './admin/articles-admin/update-article/update-article.component';
import { ArticleViewComponent } from './admin/articles-admin/article-view/article-view.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';

const routes: Routes = [
  {path: '', component: HomeComponent,
    children:[  
      {path: '', component: IntroComponent}]
  },
  // {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contact/sent', component: SentComponent},
  {path: 'about', component: AboutComponent},
  {path: 'admin/articles', component: ArticlesAdminComponent, canActivate:[AuthGuardService]},
  {path: 'admin/articles/create', component: CreateArticleComponent},//, canActivate:[AuthGuardService]},
  {path: 'admin/articles/update/:id', component: UpdateArticleComponent, canActivate:[AuthGuardService]},
  {path: 'admin/articles/details/:id', component: ArticleViewComponent, canActivate:[AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'articles/:id', component: ArticlesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
