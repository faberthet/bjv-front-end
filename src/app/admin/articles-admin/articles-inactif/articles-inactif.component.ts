import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { ArticleWithoutContent } from 'src/app/models/article-without-content';

@Component({
  selector: 'app-articles-inactif',
  templateUrl: './articles-inactif.component.html',
  styleUrls: ['./articles-inactif.component.css']
})
export class ArticlesInactifComponent implements OnInit {

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

  updateArticle(id: number){
    this.router.navigate(['admin/articles/update', id])
  }

  deleteArticle(id: number){
    this.articleService.deleteArticle(id).subscribe( data => {
      console.log(data);
      this.getArticles();
    })
  }

  articleView(id: number){
    this.router.navigate(['admin/articles/details', id])
  }

  activate(id: number){
    this.articleService.activateArticle(id).subscribe(
      data => { console.log(data);
        this.getArticles();
      })
  }

}
