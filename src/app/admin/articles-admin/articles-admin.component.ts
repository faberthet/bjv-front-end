import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles-admin',
  templateUrl: './articles-admin.component.html',
  styleUrls: ['./articles-admin.component.css']
})
export class ArticlesAdminComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticlesService, private router: Router) { }

  ngOnInit(): void {
    this.getArticles();
  }

  private getArticles(){
    this.articleService.getArticles().subscribe( data => {
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


}
