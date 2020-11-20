import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeScreenComponent } from './screens/user-home-screen/user-home-screen.component';

const routes: Routes = [
  { path: '', component: UserHomeScreenComponent, pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
