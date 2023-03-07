import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as CustomEditor from 'ckeditor5-custom-build/build/ckeditor'
import { forkJoin, Observable } from 'rxjs';


@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  article: Article = new Article();
  private id: number=this.route.snapshot.params['id']
  public Editor = CustomEditor;

  sections:{name:string}[]=[];
  subsections:{name:string, sectionName:string, id:number}[]=[];
  requests:Observable<Object>[]=[];
  
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
    this.getSections();
  }

  onSubmit(x:any){
    
    if(x.form.valid){
      this.saveArticle();
      this.addSection(this.article.section);
      this.addSubsection(this.article.section, this.article.subsection);
      forkJoin(this.requests).subscribe({
        error: error => console.log(error),
        next: res => this.router.navigate(['/admin/articles/actif'])
      })
    }
    x.form.controls.titre.touched=true
    x.form.controls.section.touched=true
    console.log("submitting")
    //x.form.controls.subsection.touched=true
  }

  saveArticle(){
    this.requests.push(this.articleService.updateArticle(this.id,this.article))
  }
 
   addSection(section:string){
 
     let addsection:Boolean=true
 
     this.sections.forEach( (value) => {
       if(value.name==section){ //si la section existe deja..
         addsection=false
       }
     })
     if(addsection){ //si la section n'existe pas encore
       this.requests.push(this.articleService.addSection({name:section}))
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
       this.requests.push(this.articleService.addSubsection({name:subsection, sectionName:section}))
     }
   }

  onSelect($event: Event){
    this.subsections=[];// pour laisser le champ select des sous-sections vide au départ
    this.article.subsection="";
    console.log((<HTMLTextAreaElement>$event.target).value)
    const value:string=(<HTMLTextAreaElement>$event.target).value
    this.getSubsection(value);
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

  public config={
  	toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'underline',
        '|',
        'fontFamily',
        // 'fontSize', // ne marche pas
        'fontColor',
        'fontBackgroundColor',
        '|',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'alignment',
        'outdent',
        'indent',
        '|',
        'imageUpload',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        'undo',
        'redo',
        'highlight',
        'imageInsert',
        //'specialCharacters', //ne fonctionne pas
        'todoList'
      ]
    },
    language: 'fr',
    image: {
      toolbar: [
        'imageTextAlternative',
        // 'imageStyle:inline',
        // 'imageStyle:block',
        // 'imageStyle:side',
        'linkImage',
        'toggleImageCaption',
        'resizeImage'
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
      uploadUrl: 'https://api.breizh-jardinvivant.com/upl',
      

      // // Enable the XMLHttpRequest.withCredentials property.
      // withCredentials: true,

      // // Headers sent along with the XMLHttpRequest to the upload server.
      headers: {
        'Image-Folder' : this.id,
      //     'X-CSRF-TOKEN': 'CSRF-Token',
      //     Authorization: 'Bearer <JSON Web Token>',
          //  'Access-Control-Allow-Credentials': true
       
      }
  }
   
  }

}
