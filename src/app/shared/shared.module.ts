import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotterComponent } from './fotter/fotter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';

const component = [
  FotterComponent,
  NavbarComponent,
  CarouselComponent
]
@NgModule({
  declarations: [
    ...component,
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
