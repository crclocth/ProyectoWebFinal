import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorModule } from './visitor/visitor.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: 'visitor', loadChildren: () => import('./visitor/visitor.module').then (m => m.VisitorModule)  },
  { path: 'user', loadChildren: () => import('./user/user.module').then (m => m.UserModule)  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
