import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorHomeScreenComponent } from './screens/visitor-home-screen/visitor-home-screen.component';
import { VisitorComponent } from './visitor.component';
import { NosotrosComponent } from './screens/nosotros/nosotros.component';
import { EncuestasComponent } from './screens/encuestas/encuestas.component';
import { NoticiasComponent } from './screens/noticias/noticias.component';
import { DescargasComponent } from './screens/descargas/descargas.component';
import { SugerenciasComponent } from './screens/sugerencias/sugerencias.component';
import { LoginComponent } from './screens/login/login.component';
import { OlvidarComponent } from './screens/olvidar/olvidar.component';
import { RegistroComponent } from './screens/registro/registro.component';
import { Encuesta1Component } from './screens/encuesta1/encuesta1.component';
import { Encuesta2Component } from './screens/encuesta2/encuesta2.component';
import { Encuesta3Component } from './screens/encuesta3/encuesta3.component';
import { Informacion1Component } from './screens/informacion1/informacion1.component';
import { Informacion2Component } from './screens/informacion2/informacion2.component';
import { Informacion3Component } from './screens/informacion3/informacion3.component';
import { Informacion4Component } from './screens/informacion4/informacion4.component';



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
      { path: 'olvidar', component: OlvidarComponent},
      { path: 'encuesta1', component:Encuesta1Component},
      { path: 'encuesta2', component:Encuesta2Component},
      { path: 'encuesta3', component:Encuesta3Component},
      { path: 'informacion1', component:Informacion1Component},
      { path: 'informacion2', component:Informacion2Component},
      { path: 'informacion3', component:Informacion3Component},
      { path: 'informacion4', component:Informacion4Component},
    ]
} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
