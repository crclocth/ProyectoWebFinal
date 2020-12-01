import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminHomeScreenComponent } from './screens/admin-home-screen/admin-home-screen.component';
import { AdminNoticiasComponent } from './screens/admin-noticias/admin-noticias.component';
import { AdminEncuestasComponent } from './screens/admin-encuestas/admin-encuestas.component';
import { AdminDescargasComponent } from './screens/admin-descargas/admin-descargas.component';
import { AdminSugerenciasComponent } from './screens/admin-sugerencias/admin-sugerencias.component';
import { AdminNosotrosComponent } from './screens/admin-nosotros/admin-nosotros.component';
import { AdminEncuesta1Component } from './screens/admin-encuesta1/admin-encuesta1.component';
import { AdminEncuesta2Component } from './screens/admin-encuesta2/admin-encuesta2.component';
import { AdminEncuesta3Component } from './screens/admin-encuesta3/admin-encuesta3.component';
import { AdminInformacion1Component } from './screens/admin-informacion1/admin-informacion1.component';
import { AdminInformacion2Component } from './screens/admin-informacion2/admin-informacion2.component';
import { AdminInformacion3Component } from './screens/admin-informacion3/admin-informacion3.component';
import { AdminInformacion4Component } from './screens/admin-informacion4/admin-informacion4.component';

const routes: Routes = [
  
  { path: '', component: AdminComponent,
    children: [
      { path: '', component: AdminHomeScreenComponent },
      { path: 'noticias', component: AdminNoticiasComponent},
      { path: 'encuestas', component:AdminEncuestasComponent},
      { path: 'descargas', component: AdminDescargasComponent},
      { path: 'sugerencias', component: AdminSugerenciasComponent},
      { path: 'nosotros', component: AdminNosotrosComponent},
      { path: 'encuesta1', component:AdminEncuesta1Component},
      { path: 'encuesta2', component:AdminEncuesta2Component},
      { path: 'encuesta3', component:AdminEncuesta3Component},
      { path: 'admin-informacion1', component:AdminInformacion1Component},
      { path: 'admin-informacion2', component:AdminInformacion2Component},
      { path: 'admin-informacion3', component:AdminInformacion3Component},
      { path: 'admin-informacion4', component:AdminInformacion4Component},
    ]  
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
