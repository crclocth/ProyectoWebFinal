import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { AdminHomeScreenComponent } from './screens/admin-home-screen/admin-home-screen.component';
import { AdminDescargasComponent } from './screens/admin-descargas/admin-descargas.component';
import { AdminEncuestasComponent } from './screens/admin-encuestas/admin-encuestas.component';
import { AdminNosotrosComponent } from './screens/admin-nosotros/admin-nosotros.component';
import { AdminSugerenciasComponent } from './screens/admin-sugerencias/admin-sugerencias.component';
import { AdminNoticiasComponent } from './screens/admin-noticias/admin-noticias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisitorProviderService } from '../core/providers/visitor/visitor-provider.service';
import { SugerenciasProviderService } from '../core/providers/sugerencias/sugerencias-provider.service';
import { RecuperarProviderService } from '../core/providers/recuperar/recuperar-provider.service';
import { AdminEncuesta3Component } from './screens/admin-encuesta3/admin-encuesta3.component';
import { AdminEncuesta2Component } from './screens/admin-encuesta2/admin-encuesta2.component';
import { AdminEncuesta1Component } from './screens/admin-encuesta1/admin-encuesta1.component';
import { AdminInformacion1Component } from './screens/admin-informacion1/admin-informacion1.component';
import { AdminInformacion2Component } from './screens/admin-informacion2/admin-informacion2.component';
import { AdminInformacion3Component } from './screens/admin-informacion3/admin-informacion3.component';
import { AdminInformacion4Component } from './screens/admin-informacion4/admin-informacion4.component';


@NgModule({
  declarations: [AdminComponent, 
    AdminHomeScreenComponent, 
    AdminDescargasComponent, 
    AdminEncuestasComponent, 
    AdminNosotrosComponent, 
    AdminSugerenciasComponent, 
    AdminNoticiasComponent, AdminEncuesta3Component, AdminEncuesta2Component, AdminEncuesta1Component, AdminInformacion1Component, AdminInformacion2Component, AdminInformacion3Component, AdminInformacion4Component],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    VisitorProviderService,
    SugerenciasProviderService,
    RecuperarProviderService, 
    
  ],
  exports: [
    AdminComponent, 
    AdminHomeScreenComponent
  ]
})
export class AdminModule { }
