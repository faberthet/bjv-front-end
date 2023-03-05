import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';
import { ArticleWithoutContent } from '../models/article-without-content';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private baseUrl: string="http://localhost:5000/"
  private articlesBaseUrl: string="http://localhost:5000/api/v1/articles"

  //private baseUrl: string="https://api.breizh-jardinvivant.com/"
  //private baseUrl: string="http://localhost:5000/api/v1/articles"
  //private baseUrl: string="http://breizhjar-env.eba-tipx9yis.eu-west-3.elasticbeanstalk.com/api/v1/articles"
  //private articlesBaseUrl: string="https://api.breizh-jardinvivant.com/api/v1/articles"
  

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(this.articlesBaseUrl)
  }

  getArticlesWithoutContent(): Observable<ArticleWithoutContent[]>{
    return this.http.get<ArticleWithoutContent[]>(this.articlesBaseUrl + "/dto")
  }

  addArticle(article: Article): Observable<Object>{
    return this.http.post(this.articlesBaseUrl,article);
  }
  getArticleById(id: number): Observable<Article>{
    return this.http.get<Article>(this.articlesBaseUrl + `/${id}`)
  }
  updateArticle(id:number, article: Article): Observable<Object>{
    return this.http.put(this.articlesBaseUrl + `/${id}`, article)
  }
  deleteArticle(id:number): Observable<Object>{
    return this.http.delete(this.articlesBaseUrl + `/${id}`)
  }
  activateArticle(id: number): Observable<Object>{
    return this.http.put(this.articlesBaseUrl + "/activate" + `/${id}`,"")
  }
  deactivateArticle(id: number): Observable<Object>{
    return this.http.put(this.articlesBaseUrl + "/deactivate" + `/${id}`,"")
  }


  getSections(): Observable<Object>{
    return this.http.get(this.baseUrl + "sections")
  }
  getSubsections(section:string): Observable<Object>{
    return this.http.get(this.baseUrl + "subsections?section="+ section)
  }
  addSection(section:{name:string}): Observable<Object>{
    return this.http.post(this.baseUrl + "sections",section)
  }
  addSubsection(subsection:{name:string, sectionName:string}): Observable<Object>{
    return this.http.post(this.baseUrl + "subsections",subsection)
  }

}
