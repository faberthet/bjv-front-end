import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';
import { Router } from '@angular/router';
// import * as CustomEditor from 'ckeditor5-custom-build/build/ckeditor'


@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  article: Article = new Article();

  sections:{name:string}[];
  subsections:{name:string, sectionName:string, id:number}[];
  subsDisplay:{name?:string, sectionName:string, id:number}[];
  
  constructor(private articleService: ArticlesService,private router: Router) { }

  ngOnInit(): void {
    this.article.content="" //error backend lors de updatearticle si null... 
    this.article.actif=false
    // this.article.section=""
    // this.article.subsection=""

    this.getSections();
  }


  onSubmit(x:any){
    if(x.form.valid){
      this.saveArticle();
      //switchmap pipe... for chaining http request...
    }
    x.form.controls.titre.touched=true
    x.form.controls.section.touched=true
  }

  onSelect($event: Event){
    this.subsections=[];// pour laisser le champ select des sous-sections vide au départ
    this.article.subsection="";
    console.log((<HTMLTextAreaElement>$event.target).value)
    const value:string=(<HTMLTextAreaElement>$event.target).value
    this.getSubsection(value);
  }

  
  saveArticle(){
    this.articleService.addArticle(this.article).subscribe({
      error: error => console.log(error),
      next: res => this.router.navigate(['/admin/articles/actif'])
    })
  }

  addSection(section:string){

    let addsection:Boolean=true

    this.sections.forEach( (value) => {
      if(value.name==section){ //si la section existe deja..
        addsection=false
      }
    })
    if(addsection){ //si la section n'existe pas encore
      this.articleService.addSection({name:section}).subscribe({
        error: error => console.log(error)
      })
    }
  }

  addSubsection(section:string,subsection:string){

    let addsubsection:Boolean=true

    this.subsections.forEach( (value) => {
      if(value.name==subsection){ //si la sous-section existe deja..
        addsubsection=false
      }
    })
    if(addsubsection){ //si la sous-section n'existe pas encore
      this.articleService.addSubsection({name:subsection, sectionName:section}).subscribe({
        error: error => console.log(error)
      })
    }
  }

  getSections(){
    this.articleService.getSections().subscribe({
      error: error => console.log(error),
      next: res => [this.sections=<{name:string}[]>res,console.log(this.sections)]
    })
  }

  getSubsection(section:string){
    this.articleService.getSubsections(section).subscribe({
      error: error => console.log(error),
      next: res => [
        this.subsections=<{name:string, sectionName:string,id:number}[]>res,
        console.log(this.subsections)
      ]
    })
  }

//   public Editor = CustomEditor;
//   public config={
//   	toolbar: {
//       items: [
//         'heading',
//         '|',
//         'bold',
//         'italic',
//         'link',
//         'bulletedList',
//         'numberedList',
//         '|',
//         'outdent',
//         'indent',
//         '|',
//         'imageUpload',
//         'blockQuote',
//         'insertTable',
//         'mediaEmbed',
//         'undo',
//         'redo',
//         'fontBackgroundColor',
//         'fontColor',
//         'fontFamily',
//         'fontSize',
//         'highlight',
//         'imageInsert',
//         'specialCharacters',
//         'todoList',
//         'underline'
//       ]
//     },
//     language: 'fr',
//     image: {
//       toolbar: [
//         'imageTextAlternative',
//         'imageStyle:inline',
//         'imageStyle:block',
//         'imageStyle:side',
//         'linkImage'
//       ]
//     },
//     table: {
//       contentToolbar: [
//         'tableColumn',
//         'tableRow',
//         'mergeTableCells',
//         'tableCellProperties',
//         'tableProperties'
//       ]
//     }
//   }

}
