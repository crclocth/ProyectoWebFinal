import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotterComponent } from './fotter/fotter.component';
const component = [
  FotterComponent
]
@NgModule({
  declarations: [
    ...component
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
