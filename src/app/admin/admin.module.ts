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


@NgModule({
  declarations: [AdminComponent, 
    AdminHomeScreenComponent, 
    AdminDescargasComponent, 
    AdminEncuestasComponent, 
    AdminNosotrosComponent, 
    AdminSugerenciasComponent, 
    AdminNoticiasComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminComponent, 
    AdminHomeScreenComponent
  ]
})
export class AdminModule { }
