import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as CustomEditor from 'ckeditor5-custom-build/build/ckeditor'

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  article: Article = new Article();
  id: number;
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
        'alignment',
        'underline',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        'undo',
        'redo',
        'imageInsert',
        'fontColor',
        'fontBackgroundColor',
        'fontFamily',
        'fontSize',
        'horizontalLine',
        'specialCharacters'
      ]
    },
    language: 'fr',
    image: {
      toolbar: [
        'imageTextAlternative',
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side',
        'linkImage',
        'toggleImageCaption'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        'tableCellProperties'
      ]
    }
  }

  constructor(private articleService: ArticlesService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //pour éviter message d'erreur ckeditor dans console car undefined
    this.article.content=""

    this.id= this.route.snapshot.params['id'];
    this.articleService.getArticleById(this.id).subscribe({
      error: error => console.log(error),
      next: res => this.article=res
    })
  }


  onSubmit(){
    this.articleService.updateArticle(this.id,this.article).subscribe({
      error: error => console.log(error),
      next: res => this.router.navigate(['/admin/articles'])
    });
  }

}
