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



@NgModule({
  declarations: [UserComponent, 
    UserHomeScreenComponent, 
    UserEncuestasComponent, 
    UserDescargasComponent, 
    UserNosotrosComponent, 
    UserSugerenciasComponent, 
    UserNoticiasComponent, 
    UserMiperfilComponent],
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
    RecuperarProviderService
  ],
  exports:[
    UserComponent, 
    UserHomeScreenComponent
  ]
})
export class UserModule { }
