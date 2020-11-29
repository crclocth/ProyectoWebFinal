import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { UserHomeScreenComponent } from './screens/user-home-screen/user-home-screen.component';
import { UserEncuestasComponent } from './screens/user-encuestas/user-encuestas.component';
import { UserDescargasComponent } from './screens/user-descargas/user-descargas.component';
import { UserNosotrosComponent } from './screens/user-nosotros/user-nosotros.component';
import { UserSugerenciasComponent } from './screens/user-sugerencias/user-sugerencias.component';
import { UserNoticiasComponent } from './screens/user-noticias/user-noticias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserMiperfilComponent } from './screens/user-miperfil/user-miperfil.component';
import { VisitorProviderService } from '../core/providers/visitor/visitor-provider.service';
import { SugerenciasProviderService } from '../core/providers/sugerencias/sugerencias-provider.service';
import { RecuperarProviderService } from '../core/providers/recuperar/recuperar-provider.service';
import { UserEncuesta3Component } from './screens/user-encuesta3/user-encuesta3.component';
import { UserEncuesta2Component } from './screens/user-encuesta2/user-encuesta2.component';
import { UserEncuesta1Component } from './screens/user-encuesta1/user-encuesta1.component';
import { Encuesta1ProviderService } from '../core/providers/encuesta1/encuesta1-provider.service';
import { Encuesta2ProviderService } from '../core/providers/encuesta2/encuesta2-provider.service';
import { Encuesta3ProviderService } from '../core/providers/encuesta3/encuesta3-provider.service';



@NgModule({
  declarations: [UserComponent, 
    UserHomeScreenComponent, 
    UserEncuestasComponent, 
    UserDescargasComponent, 
    UserNosotrosComponent, 
    UserSugerenciasComponent, 
    UserNoticiasComponent, 
    UserMiperfilComponent, 
    UserEncuesta3Component, 
    UserEncuesta2Component, 
    UserEncuesta1Component],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers:[
    VisitorProviderService,
    SugerenciasProviderService,
    RecuperarProviderService,
    Encuesta1ProviderService,
    Encuesta2ProviderService,
    Encuesta3ProviderService
  ],
  exports:[
    UserComponent, 
    UserHomeScreenComponent
  ]
})
export class UserModule { }
