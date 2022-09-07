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
  private id: number=this.route.snapshot.params['id']
  public Editor = CustomEditor;
  
  constructor(private articleService: ArticlesService,private router: Router, private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    //pour éviter message d'erreur ckeditor dans console car undefined
    this.article.content=""
    
    //this.id= this.route.snapshot.params['id'];
    this.articleService.getArticleById(this.id).subscribe({
      error: error => console.log(error),
      next: res => this.article=res
    })
  }

  onSubmit(x:any){
    if(x.form.valid){
      this.articleService.updateArticle(this.id,this.article).subscribe({
        error: error => console.log(error),
        next: res => this.router.navigate(['/admin/articles/actif'])
      });
    }
    x.form.controls.titre.touched=true
    x.form.controls.theme.touched=true
  }

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
    },
    simpleUpload: {
      // The URL that the images are uploaded to.
      uploadUrl: 'http://localhost:8080/upl',

      // // Enable the XMLHttpRequest.withCredentials property.
      // withCredentials: true,

      // // Headers sent along with the XMLHttpRequest to the upload server.
      headers: {
        'Image-Folder' : this.id
      //     'X-CSRF-TOKEN': 'CSRF-Token',
      //     Authorization: 'Bearer <JSON Web Token>',
      //     Access-Control-Allow-Credentials: true
      }
  }
   
  }

}
