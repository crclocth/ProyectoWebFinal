import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorHomeScreenComponent } from './screens/visitor-home-screen/visitor-home-screen.component';


const routes: Routes = [
  { path: '', component: VisitorHomeScreenComponent }   

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
