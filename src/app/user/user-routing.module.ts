import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeScreenComponent } from './screens/user-home-screen/user-home-screen.component';
import { UserComponent } from './user.component';
import { UserNoticiasComponent } from './screens/user-noticias/user-noticias.component';
import { UserEncuestasComponent } from './screens/user-encuestas/user-encuestas.component';
import { UserDescargasComponent } from './screens/user-descargas/user-descargas.component';
import { UserSugerenciasComponent } from './screens/user-sugerencias/user-sugerencias.component';
import { UserNosotrosComponent } from './screens/user-nosotros/user-nosotros.component';
import { UserMiperfilComponent } from './screens/user-miperfil/user-miperfil.component';
import { UserEncuesta1Component } from './screens/user-encuesta1/user-encuesta1.component';
import { UserEncuesta2Component } from './screens/user-encuesta2/user-encuesta2.component';
import { UserEncuesta3Component } from './screens/user-encuesta3/user-encuesta3.component';


const routes: Routes = [
    
  { path: '', component: UserComponent,
    children: [
      { path: '', component: UserHomeScreenComponent },
      { path: 'noticias', component: UserNoticiasComponent},
      { path: 'encuestas', component: UserEncuestasComponent},
      { path: 'descargas', component: UserDescargasComponent},
      { path: 'sugerencias', component: UserSugerenciasComponent},
      { path: 'nosotros', component: UserNosotrosComponent}, 
      { path: 'miperfil', component: UserMiperfilComponent},
      { path: 'encuesta1', component:UserEncuesta1Component},
      { path: 'encuesta2', component:UserEncuesta2Component},
      { path: 'encuesta3', component:UserEncuesta3Component}
      
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
