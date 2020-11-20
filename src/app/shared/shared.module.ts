import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotterComponent } from './fotter/fotter.component';
import { NavbarComponent } from './navbar/navbar.component';
const component = [
  FotterComponent,
  NavbarComponent
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
