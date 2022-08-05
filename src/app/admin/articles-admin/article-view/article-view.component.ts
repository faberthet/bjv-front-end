import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ActivatedRoute} from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {
  id: number
  article: Article = new Article();
  trustedContent: SafeHtml;

  constructor(private route: ActivatedRoute,private articleService: ArticlesService, private sanitized: DomSanitizer) { }

  ngOnInit(): void {
    
    this.id=this.route.snapshot.params['id']

    //Promise.resolve( // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/await
    this.articleService.getArticleById(this.id).subscribe({
      error: error => console.log(error),
      next: res => this.article=res,
    })//).then()
    setTimeout (() => {//trouver une solution pour effectuer cette action après this.article=res
     // var rp=this.article.content.replace("<img src", "<img [src]");
      this.trustedContent=this.sanitized.bypassSecurityTrustHtml(this.article.content);
     }, 5000);
    //this.trustedContent=this.sanitized.bypassSecurityTrustHtml(this.article.content);

  }

}
