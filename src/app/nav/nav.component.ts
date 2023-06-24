import { Component, HostListener, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  faBars=faBars
  display:boolean=false;
  public currentWindowWidth: number;

  constructor() { }

  ngOnInit(): void {
    this.currentWindowWidth=window.innerWidth;
  }
  
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.currentWindowWidth = window.innerWidth;
    // this.getScreenHeight = window.innerHeight;
  }
  toggleBars(){
    this.display=!this.display
  }
}


