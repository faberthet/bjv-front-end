import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';
import { Router } from '@angular/router';
import * as CustomEditor from 'ckeditor5-custom-build/build/ckeditor'


@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  article: Article = new Article();
  
  constructor(private articleService: ArticlesService,private router: Router) { }

  ngOnInit(): void {
    this.article.content="" //error backend lors de updatearticle si null... 
    this.article.actif=false
    this.article.theme="ornement"
  }

  saveArticle(){
    this.articleService.addArticle(this.article).subscribe({
      error: error => console.log(error),
      next: res => this.router.navigate(['/admin/articles/actif'])
    })
  }

  onSubmit(x:any){
    if(x.form.valid){
      this.saveArticle();
    }
    x.form.controls.titre.touched=true
    x.form.controls.theme.touched=true
  }

  public Editor = CustomEditor;
  public config={
  	toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        '|',
        'imageUpload',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        'undo',
        'redo',
        'fontBackgroundColor',
        'fontColor',
        'fontFamily',
        'fontSize',
        'highlight',
        'imageInsert',
        'specialCharacters',
        'todoList',
        'underline'
      ]
    },
    language: 'fr',
    image: {
      toolbar: [
        'imageTextAlternative',
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side',
        'linkImage'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        'tableCellProperties',
        'tableProperties'
      ]
    }
  }

}
