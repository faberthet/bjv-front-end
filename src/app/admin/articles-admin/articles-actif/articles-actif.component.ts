import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { ArticleWithoutContent } from 'src/app/models/article-without-content';

@Component({
  selector: 'app-articles-actif',
  templateUrl: './articles-actif.component.html',
  styleUrls: ['./articles-actif.component.css']
})
export class ArticlesActifComponent implements OnInit {

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

  deleteArticle(id: number, titre: string){
    if(confirm("Supprimer " + titre + " ?")) {
    this.articleService.deleteArticle(id).subscribe( data => {
      console.log(data);
      this.getArticles();
    })
  }
  }

  articleView(id: number){
    this.router.navigate(['admin/articles/details', id])
  }

  deactivate(id: number){
    this.articleService.deactivateArticle(id).subscribe(
      data => { console.log(data);this.getArticles();
      
    })
  }

}
