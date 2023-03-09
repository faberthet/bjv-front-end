import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Subsection } from 'src/app/models/subsection';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-subsection-nav',
  templateUrl: './subsection-nav.component.html',
  styleUrls: ['./subsection-nav.component.css']
})
export class SubsectionNavComponent implements OnInit {

  faAngledown=faAngleDown
  faAngleRight=faAngleRight

  display:boolean=false
  

  articles:Article[];

  @Input() subsection:Subsection|undefined;



  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.display=!this.display
  }

}
