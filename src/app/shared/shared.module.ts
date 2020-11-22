import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotterComponent } from './fotter/fotter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CabezoteComponent } from './cabezote/cabezote.component';

const component = [
  FotterComponent,
  NavbarComponent,
  CarouselComponent,
  CabezoteComponent
]
@NgModule({
  declarations: [
    ...component,
    CabezoteComponent,
  ],
  imports: [
    CommonModule
  ],

  exports:[
    ...component
  ],
})
export class SharedModule {
 }
