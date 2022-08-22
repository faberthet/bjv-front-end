import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-articles-admin',
  templateUrl: './articles-admin.component.html',
  styleUrls: ['./articles-admin.component.css']
})
export class ArticlesAdminComponent implements OnInit {

  articles: Article[];
  isLoggedIn:any;

  constructor(private articleService: ArticlesService, private router: Router, private authservices:AuthenticationService) { }

  ngOnInit(): void {
    this.getArticles();
    this.isLoggedIn=this.authservices.isUserLoggedIn;
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

  activate(id: number){
    this.articleService.activateArticle(id).subscribe(
      data => { console.log(data);
        this.getArticles();
      })
  }

  deactivate(id: number){
    this.articleService.deactivateArticle(id).subscribe(
      data => { console.log(data);this.getArticles();
      
    })
  }

  logout(){
    this.authservices.logOut
  }
}
