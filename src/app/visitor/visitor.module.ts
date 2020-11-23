import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorComponent } from './visitor.component';
import { VisitorHomeScreenComponent } from './screens/visitor-home-screen/visitor-home-screen.component';
import { SharedModule } from '../shared/shared.module';
import { NosotrosComponent } from './screens/nosotros/nosotros.component';
import { EncuestasComponent } from './screens/encuestas/encuestas.component';
import { DescargasComponent } from './screens/descargas/descargas.component';
import { SugerenciasComponent } from './screens/sugerencias/sugerencias.component';
import { NoticiasComponent } from './screens/noticias/noticias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VisitorComponent, 
    VisitorHomeScreenComponent, 
    NosotrosComponent, 
    EncuestasComponent, 
    DescargasComponent, 
    SugerenciasComponent, 
    NoticiasComponent],
    
  imports: [
    CommonModule,
    VisitorRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[
    VisitorComponent, 
    VisitorHomeScreenComponent
  ]
})
export class VisitorModule { }
