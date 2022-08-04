import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.substring()
  }

  substring(){
    var m,
    fileNames = [], 
    str = '<img class="test" src="http://site.org/one.gif" />\n <img src="http://site.org/two.jpg" />',
    rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;

while ( m = rex.exec( str ) ) {
  fileNames.push( m[1].split('/').pop() );
}

console.log( fileNames ); 

  }

}
