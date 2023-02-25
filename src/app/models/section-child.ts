import { ArticleWithoutContent } from "./article-without-content";
import { Subsection } from "./subsection";

export class SectionChild {
    type!:string; //"article" ou "subsection"
    article?:ArticleWithoutContent;
    subsection?:Subsection;
}
