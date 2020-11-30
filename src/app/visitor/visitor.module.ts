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
import { Encuesta1Component } from './screens/encuesta1/encuesta1.component';
import { Encuesta2Component } from './screens/encuesta2/encuesta2.component';
import { Encuesta3Component } from './screens/encuesta3/encuesta3.component';
import { Encuesta1ProviderService } from '../core/providers/encuesta1/encuesta1-provider.service';
import { Encuesta2ProviderService } from '../core/providers/encuesta2/encuesta2-provider.service';
import { Encuesta3ProviderService } from '../core/providers/encuesta3/encuesta3-provider.service';
import { Informacion1Component } from './screens/informacion1/informacion1.component';
import { Informacion2Component } from './screens/informacion2/informacion2.component';
import { Informacion3Component } from './screens/informacion3/informacion3.component';
import { Informacion4Component } from './screens/informacion4/informacion4.component';
import { NoticiasProviderService } from '../core/providers/noticias/noticias-provider.service';



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
    Encuesta1Component, 
    Encuesta2Component, 
    Encuesta3Component, 
    Informacion1Component, 
    Informacion2Component, 
    Informacion3Component, 
    Informacion4Component,
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
    RecuperarProviderService,
    Encuesta1ProviderService,
    Encuesta2ProviderService,
    Encuesta3ProviderService,
    NoticiasProviderService
  ],
  

  exports:[
    VisitorComponent, 
    VisitorHomeScreenComponent

  ]
})
export class VisitorModule { }
