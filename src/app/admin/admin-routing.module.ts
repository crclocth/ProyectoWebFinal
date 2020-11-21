import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeScreenComponent } from './screens/admin-home-screen/admin-home-screen.component';

const routes: Routes = [
  { path: '', component: AdminHomeScreenComponent, pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
