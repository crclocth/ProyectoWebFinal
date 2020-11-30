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
      { path: 'encuesta3', component:AdminEncuesta3Component}
    ]  
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
