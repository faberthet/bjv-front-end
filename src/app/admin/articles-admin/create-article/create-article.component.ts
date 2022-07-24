import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  article: Article = new Article();
  
  public Editor = ClassicEditor;

  constructor(private articleService: ArticlesService,private router: Router) { }

  ngOnInit(): void {
    //pour éviter message d'erreur ckeditor dans console car undefined
    this.article.content=""
  }

  saveArticle(){
    this.articleService.addArticle(this.article).subscribe({
      error: error => console.log(error),
      next: res => this.router.navigate(['/admin/articles'])
    })
  }

  onSubmit(){
    this.saveArticle();
  }

}
