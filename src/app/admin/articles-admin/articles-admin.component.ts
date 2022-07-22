import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles-admin',
  templateUrl: './articles-admin.component.html',
  styleUrls: ['./articles-admin.component.css']
})
export class ArticlesAdminComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  private getArticles(){
    this.articleService.getArticles().subscribe( data => {
      this.articles=data;
    })

  }

}
