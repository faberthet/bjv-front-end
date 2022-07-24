import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntroComponent } from './pages/intro/intro.component';
import { SentComponent } from './pages/contact/sent/sent.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';
import { ArticleNavbarComponent } from './articles/article-navbar/article-navbar.component';

import { ArticlesAdminComponent } from './admin/articles-admin/articles-admin.component';
import { CreateArticleComponent } from './admin/articles-admin/create-article/create-article.component';
import { UpdateArticleComponent } from './admin/articles-admin/update-article/update-article.component';
import { ArticleViewComponent } from './admin/articles-admin/article-view/article-view.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    IntroComponent,
    SentComponent,
    ArticlesComponent,
    ArticleComponent,
    ArticleNavbarComponent,
    ArticlesAdminComponent,
    CreateArticleComponent,
    UpdateArticleComponent,
    ArticleViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
