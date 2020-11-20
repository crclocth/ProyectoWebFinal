import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorComponent } from './visitor.component';
import { VisitorHomeScreenComponent } from './screens/visitor-home-screen/visitor-home-screen.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [VisitorComponent, VisitorHomeScreenComponent],
  imports: [
    CommonModule,
    VisitorRoutingModule,
    SharedModule
  ]
})
export class VisitorModule { }
