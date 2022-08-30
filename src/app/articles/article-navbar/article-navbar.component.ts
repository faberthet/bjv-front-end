import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-navbar',
  templateUrl: './article-navbar.component.html',
  styleUrls: ['./article-navbar.component.css']
})
export class ArticleNavbarComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticlesService, private router: Router) { }

  ngOnInit(): void {
    this.getArticles();
  }

  private getArticles(){ //à faire dans articleService: creer un "getwithoutcontent" pour charger seulement titre theme id pour la navbar...
    this.articleService.getArticles().subscribe( data => {
      this.articles=data;
    })
  }

  // redirect(id:number){
  //   this.router.navigate(['articles', id])
  // }
}
