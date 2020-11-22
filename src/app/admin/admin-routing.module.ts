import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminHomeScreenComponent } from './screens/admin-home-screen/admin-home-screen.component';
import { AdminNoticiasComponent } from './screens/admin-noticias/admin-noticias.component';
import { AdminEncuestasComponent } from './screens/admin-encuestas/admin-encuestas.component';
import { AdminDescargasComponent } from './screens/admin-descargas/admin-descargas.component';
import { AdminSugerenciasComponent } from './screens/admin-sugerencias/admin-sugerencias.component';
import { AdminNosotrosComponent } from './screens/admin-nosotros/admin-nosotros.component';

const routes: Routes = [
  { path: '', component: AdminHomeScreenComponent },
  { path: '', component: AdminComponent,
    children: [
      { path: 'noticias', component: AdminNoticiasComponent},
      { path: 'encuestas', component:AdminEncuestasComponent},
      { path: 'descargas', component: AdminDescargasComponent},
      { path: 'sugerencias', component: AdminSugerenciasComponent},
      { path: 'nosotros', component: AdminNosotrosComponent}
    ]  
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
