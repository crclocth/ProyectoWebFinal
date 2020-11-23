import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotterComponent } from './fotter/fotter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CabezoteComponent } from './cabezote/cabezote.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const component = [
  FotterComponent,
  NavbarComponent,
  CarouselComponent,
  NavbarUserComponent,
  NavbarAdminComponent,
  CabezoteComponent,
  PageNotFoundComponent
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
