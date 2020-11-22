import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeScreenComponent } from './screens/user-home-screen/user-home-screen.component';
import { UserComponent } from './user.component';
import { UserNoticiasComponent } from './screens/user-noticias/user-noticias.component';
import { UserEncuestasComponent } from './screens/user-encuestas/user-encuestas.component';
import { UserDescargasComponent } from './screens/user-descargas/user-descargas.component';
import { UserSugerenciasComponent } from './screens/user-sugerencias/user-sugerencias.component';
import { UserNosotrosComponent } from './screens/user-nosotros/user-nosotros.component';

const routes: Routes = [
  { path: '', component: UserHomeScreenComponent },  
  { path: '', component: UserComponent,
    children: [
      { path: 'noticias', component: UserNoticiasComponent},
      { path: 'encuestas', component: UserEncuestasComponent},
      { path: 'descargas', component: UserDescargasComponent},
      { path: 'sugerencias', component: UserSugerenciasComponent},
      { path: 'nosotros', component: UserNosotrosComponent} 
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
