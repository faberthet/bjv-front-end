import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatSidenavModule} from '@angular/material/sidenav'

const Material=[
  MatExpansionModule,
  MatSidenavModule
  
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
