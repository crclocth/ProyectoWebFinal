import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';


const routes: Routes = [
  { path: 'visitor', loadChildren: () => import('./visitor/visitor.module').then (VisitorModule => VisitorModule.VisitorModule)  },
  { path: 'user', loadChildren: () => import('./user/user.module').then (UserModule => UserModule.UserModule)  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then (AdminModule => AdminModule.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
