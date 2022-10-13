import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';
import { ArticleWithoutContent } from '../models/article-without-content';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  //private baseUrl: string="http://localhost:8080/api/v1/articles"
  //private baseUrl: string="http://breizhjar-env.eba-tipx9yis.eu-west-3.elasticbeanstalk.com/api/v1/articles"
  private baseUrl: string="https://api.breizh-jardinvivant.com/api/v1/articles"

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(this.baseUrl)
  }

  getArticlesWithoutContent(): Observable<ArticleWithoutContent[]>{
    return this.http.get<ArticleWithoutContent[]>(this.baseUrl + "/dto")
  }

  addArticle(article: Article): Observable<Object>{
    return this.http.post(this.baseUrl,article);
  }
  getArticleById(id: number): Observable<Article>{
    return this.http.get<Article>(this.baseUrl + `/${id}`)
  }
  updateArticle(id:number, article: Article): Observable<Object>{
    return this.http.put(this.baseUrl + `/${id}`, article)
  }
  deleteArticle(id:number): Observable<Object>{
    return this.http.delete(this.baseUrl + `/${id}`)
  }
  activateArticle(id: number): Observable<Object>{
    return this.http.put(this.baseUrl + "/activate" + `/${id}`,"")
  }
  deactivateArticle(id: number): Observable<Object>{
    return this.http.put(this.baseUrl + "/deactivate" + `/${id}`,"")
  }

}
