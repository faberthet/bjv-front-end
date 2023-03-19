import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Router } from '@angular/router';
import { ArticleWithoutContent } from 'src/app/models/article-without-content';
import { SectionChild } from 'src/app/models/section-child';
import { Section } from 'src/app/models/section';
import { Subsection } from 'src/app/models/subsection';

@Component({
  selector: 'app-article-navbar',
  templateUrl: './article-navbar.component.html',
  styleUrls: ['./article-navbar.component.css']
})
export class ArticleNavbarComponent implements OnInit {

  articles: ArticleWithoutContent[]=[];
  sections:Section[]=[];

  // articles:ArticleWithoutContent[]=[
  //   {id:1,titre:"titre1",section:"section1",subsection:"subsection1",actif:true},
  //   {id:2,titre:"titre2",section:"section1",subsection:"",actif:true},
  //   {id:3,titre:"titre22",section:"section1",subsection:"",actif:true},
  //   {id:4,titre:"titre3",section:"section1",subsection:"subsection1",actif:true},
  //   {id:5,titre:"titre4",section:"section1",subsection:"subsection2",actif:true},
  //   {id:6,titre:"titre5",section:"section1",subsection:"subsection2",actif:true},
  //   {id:7,titre:"titre6",section:"section2",subsection:"",actif:true}
  // ]

  constructor(private articleService: ArticlesService, private router: Router) { }

  ngOnInit(): void {
    this.getArticles();

  }

  private getArticles(){ 
    this.articleService.getArticlesWithoutContent().subscribe({
      error: error => console.log(error),
      next: res => [this.articles=res, this.toSectionTable(this.articles), console.log(this.articles),console.log(this.sections)]
    })
  }

  // data => {
  //   this.articles=data;
  // }

  // redirect(id:number){
  //   this.router.navigate(['articles', id])
  // }


  toSectionTable(articles:ArticleWithoutContent[]){
    articles.forEach((article)=>{
      if(article.actif==true){
        if(!this.isSectionInSections(article.section)){ //si section déjà dans sections
            this.createSection(article.section)
        }  
        if(article.subsection==""){ //si l'article n'est pas dans une sous-section
            this.pushArticleToSection(article.section,article)
        }else{ //si l'article est dans une sous-section
          if(!this.isSubSectionInSection(article.section,article.subsection)){ //si la sous-section n'est pas encore dans la section
            this.addSubSectionToSection(article.section,article.subsection)
          }
          this.pushArticleToSubSection(article.section, article.subsection,article)
        }
      }
    })
  }

  isSectionInSections(sectionName:string){
    for(var i=0; i < this.sections.length; i++){
      if(this.sections[i].name==sectionName){
        return true;
      }
    }
    return false;
  }

  isSubSectionInSection(sectionName:string,subSectionName:string){
    for(var i=0; i < this.sections.length; i++){
      if(this.sections[i].name==sectionName){
        for(var j=0; j < this.sections[i].children.length; j++){
          if(this.isSubSection(this.sections[i].children[j])){
            if(this.sections[i].children[j].subsection?.name==subSectionName){
              return true 
            }
          }
        }
      }
    }
    return false
  }

  pushArticleToSection(sectionName:string,article:ArticleWithoutContent){
    for(var i=0; i < this.sections.length; i++){
      if(this.sections[i].name==sectionName){
        var sectionChild=new SectionChild();
        sectionChild.type="article"
        sectionChild.article=article
        this.sections[i].children.push(sectionChild); 
        break;
      }
    }
  }

  pushArticleToSubSection(sectionName:string, subSectionName:string,article:ArticleWithoutContent){
    for(var i=0; i < this.sections.length; i++){
      if(this.sections[i].name==sectionName){
        for(var j=0; j < this.sections[i].children.length; j++){
          if(this.isSubSection(this.sections[i].children[j])){//verification du type. à essayer aussi: if((<Subsection>this.sections[i].child[j]).name!==undefined)
            if(this.sections[i].children[j].subsection?.name==subSectionName){
              this.sections[i].children[j].subsection?.articles.push(article)
              break;
            }
          }  
        }
      }
    }
  }

  isSubSection(sectionChild: SectionChild):boolean{
    return sectionChild.type=="subsection"
  }

  addSubSectionToSection(sectionName:string, subSectionName:string){
    for(var i=0; i < this.sections.length; i++){
      if(this.sections[i].name==sectionName){
        var sectionChild=new SectionChild();
        sectionChild.type="subsection"
        sectionChild.subsection=this.createSubSection(subSectionName)
        this.sections[i].children.push(sectionChild);
        break;
      }
    }
  }

  pushSectionToSections(section:Section){
    this.sections.push(section)
  }

  createSection(sectionName:string){
    var section:Section=new Section(); // new section
    section.name=sectionName
    section.children=[]
    this.sections.push(section)
  }
  createSubSection(subSectionName:string):Subsection{
    var subSection=new Subsection();
    subSection.name=subSectionName;
    subSection.articles=[];
    return subSection
  }


}
