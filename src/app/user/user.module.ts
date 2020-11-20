import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { UserHomeScreenComponent } from './screens/user-home-screen/user-home-screen.component';


@NgModule({
  declarations: [UserComponent, UserHomeScreenComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  exports:[
    UserComponent, 
    UserHomeScreenComponent
  ]
})
export class UserModule { }
