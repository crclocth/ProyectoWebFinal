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
import { LoginComponent } from './screens/login/login.component';
import { OlvidarComponent } from './screens/olvidar/olvidar.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { RegistroComponent } from './screens/registro/registro.component';
import { VisitorProviderService } from '../core/providers/visitor/visitor-provider.service';
import { CoreModule } from '../core/core.module';
import { SugerenciasProviderService } from '../core/providers/sugerencias/sugerencias-provider.service';
import { RecuperarProviderService } from '../core/providers/recuperar/recuperar-provider.service';



@NgModule({
  declarations: [
    VisitorComponent, 
    VisitorHomeScreenComponent, 
    NosotrosComponent, 
    EncuestasComponent, 
    DescargasComponent, 
    SugerenciasComponent, 
    NoticiasComponent, 
    LoginComponent, 
    OlvidarComponent, 
    RegistroComponent, 
  ],
    
  imports: [
    CommonModule,
    VisitorRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    CoreModule
  ],
  providers:[
    VisitorProviderService,
    SugerenciasProviderService,
    RecuperarProviderService
  ],
    
  exports:[
    VisitorComponent, 
    VisitorHomeScreenComponent

  ]
})
export class VisitorModule { }
