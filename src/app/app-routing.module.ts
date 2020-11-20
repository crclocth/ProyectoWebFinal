import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'visitor', loadChildren: () => import('./visitor/visitor.module').then (VisitorModule => VisitorModule.VisitorModule)  },
  { path: 'user', loadChildren: () => import('./user/user.module').then (UserModule => UserModule.UserModule)  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
