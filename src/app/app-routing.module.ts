import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorModule } from './visitor/visitor.module';

const routes: Routes = [
  { path: 'visitor', loadChildren: () => import('./visitor/visitor.module').then (m => m.VisitorModule)  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
