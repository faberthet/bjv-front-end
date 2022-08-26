import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  faBars= faBarsStaggered;

  @ViewChild(MatSidenav,{static:true}) sidenav: MatSidenav;//

  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
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
  }
  
  

  ngAfterViewInit(){

  }
}
