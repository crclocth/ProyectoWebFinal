import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorHomeScreenComponent } from './screens/visitor-home-screen/visitor-home-screen.component';
import { VisitorComponent } from './visitor.component';
import { NosotrosComponent } from './screens/nosotros/nosotros.component';


const routes: Routes = [
  { path: '', component: VisitorHomeScreenComponent },  
  { path: '', component: VisitorComponent,
    children: [
      { path: 'nosotros', component: NosotrosComponent}
    ]
} 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
