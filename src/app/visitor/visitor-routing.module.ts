import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorHomeScreenComponent } from './screens/visitor-home-screen/visitor-home-screen.component';
import { VisitorComponent } from './visitor.component';
import { NosotrosComponent } from './screens/nosotros/nosotros.component';
import { EncuestasComponent } from './screens/encuestas/encuestas.component';
import { NoticiasComponent } from './screens/noticias/noticias.component';
import { DescargasComponent } from './screens/descargas/descargas.component';
import { SugerenciasComponent } from './screens/sugerencias/sugerencias.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { LoginComponent } from './screens/login/login.component';
import { RegistroComponent } from './screens/registro/registro.component';
import { OlvidarComponent } from './screens/olvidar/olvidar.component';



const routes: Routes = [
    
  { path: '', component: VisitorComponent,
    children: [
      { path: '', component: VisitorHomeScreenComponent },
      { path: 'noticias', component: NoticiasComponent},
      { path: 'encuestas', component: EncuestasComponent},
      { path: 'descargas', component: DescargasComponent},
      { path: 'sugerencias', component: SugerenciasComponent},
      { path: 'nosotros', component: NosotrosComponent},
      { path: 'login', component: LoginComponent},
      { path: 'registro', component: RegistroComponent},
      { path: 'olvidar', component: OlvidarComponent}
    ]
} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
