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
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ArticlesActifComponent } from './admin/articles-admin/articles-actif/articles-actif.component';
import { ArticlesInactifComponent } from './admin/articles-admin/articles-inactif/articles-inactif.component';
import { SubsectionNavComponent } from './articles/article-navbar/subsection-nav/subsection-nav.component';
//import { LayoutModule } from '@angular/cdk/layout';

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
    LoginComponent,
    LogoutComponent,
    ArticlesActifComponent,
    ArticlesInactifComponent,
    SubsectionNavComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    CKEditorModule,
    BrowserAnimationsModule,
    MaterialModule,
   // LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
