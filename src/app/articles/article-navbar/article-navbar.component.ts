import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';
import { Router } from '@angular/router';
import { ArticleWithoutContent } from 'src/app/models/article-without-content';

@Component({
  selector: 'app-article-navbar',
  templateUrl: './article-navbar.component.html',
  styleUrls: ['./article-navbar.component.css']
})
export class ArticleNavbarComponent implements OnInit {

  articles: ArticleWithoutContent[];

  constructor(private articleService: ArticlesService, private router: Router) { }

  ngOnInit(): void {
    this.getArticles();
  }

  private getArticles(){ 
    this.articleService.getArticlesWithoutContent().subscribe( data => {
      this.articles=data;
    })
  }

  // redirect(id:number){
  //   this.router.navigate(['articles', id])
  // }
}
