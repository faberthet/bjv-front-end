import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ActivatedRoute} from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  id: number
  article: Article = new Article();
  trustedContent: SafeHtml;

  constructor(private route: ActivatedRoute,private articleService: ArticlesService, private sanitized: DomSanitizer) { }

  ngOnInit(): void {
    
    this.id=this.route.snapshot.params['id']

    this.articleService.getArticleById(this.id).subscribe({
      error: error => console.log(error),
      next: res =>  [this.article=res, this.trustedContent=this.sanitized.bypassSecurityTrustHtml(this.article.content)]
    })

  }
}
