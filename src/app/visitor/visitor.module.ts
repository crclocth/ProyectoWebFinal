import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorComponent } from './visitor.component';
import { VisitorHomeScreenComponent } from './screens/visitor-home-screen/visitor-home-screen.component';
import { SharedModule } from '../shared/shared.module';
import { NosotrosComponent } from './screens/nosotros/nosotros.component';


@NgModule({
  declarations: [VisitorComponent, VisitorHomeScreenComponent, NosotrosComponent],
  imports: [
    CommonModule,
    VisitorRoutingModule,
    SharedModule
  ],
  exports:[
    VisitorComponent, 
    VisitorHomeScreenComponent
  ]
})
export class VisitorModule { }
