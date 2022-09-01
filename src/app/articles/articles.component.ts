import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'

import { ArticlesService } from 'src/app/services/articles.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Article } from 'src/app/models/article';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  id: number;
  article: Article = new Article();
  trustedContent: SafeHtml;

  faBars= faBarsStaggered;

  @ViewChild(MatSidenav,{static:true}) sidenav: MatSidenav;//

  constructor(private observer: BreakpointObserver,private route: ActivatedRoute,private articleService: ArticlesService, private sanitized: DomSanitizer) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => { //reset state quand le param id change dans l'url
      this.id = params['id'];
      this.getArticle();
      if(this.sidenav.mode==='over'){
        this.sidenav.close();
      }
  });

    this.observer.observe(['(max-width: 991px)']).subscribe(
      (state: BreakpointState) => {
        if (state.matches) {
         // setTimeout(()=> { // pour fixer message d'erreur en mode developpement: ExpressionChangedAfterItHasBeenCheckedError...
                              // seulement dans ngAfterViewInit...
            this.sidenav.mode = 'over';
         // });
         // setTimeout(()=> {
            this.sidenav.close();
         // });
          console.log('moins de 800px')

        }else{
        //  setTimeout(()=> {
            this.sidenav.mode = 'side';
       // });
        // setTimeout(()=> {
            this.sidenav.open();
        // });
          console.log('plus de 800px')
        }
      }
    )

   // this.getArticle()

  }

  getArticle(){
    this.articleService.getArticleById(this.id).subscribe({
      error: error => console.log(error),
      next: res =>  [this.article=res, this.trustedContent=this.sanitized.bypassSecurityTrustHtml(this.article.content)]
    })
    console.log(this.id)
  }
  
  

  ngAfterViewInit(){
 
  }
}
