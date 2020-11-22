import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorHomeScreenComponent } from './screens/visitor-home-screen/visitor-home-screen.component';
import { VisitorComponent } from './visitor.component';
import { NosotrosComponent } from './screens/nosotros/nosotros.component';
import { EncuestasComponent } from './screens/encuestas/encuestas.component';
import { NoticiasComponent } from './screens/noticias/noticias.component';
import { DescargasComponent } from './screens/descargas/descargas.component';
import { SugerenciasComponent } from './screens/sugerencias/sugerencias.component';



const routes: Routes = [
  { path: '', component: VisitorHomeScreenComponent },  
  { path: '', component: VisitorComponent,
    children: [
      { path: 'noticias', component: NoticiasComponent},
      { path: 'encuestas', component: EncuestasComponent},
      { path: 'descargas', component: DescargasComponent},
      { path: 'sugerencias', component: SugerenciasComponent},
      { path: 'nosotros', component: NosotrosComponent}, 
    ]
} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
