import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'omni-web', pathMatch: 'full'
  },

  {
    path: 'omni-web',
    loadChildren: () => import('./pages/omni-web/omni-web.module').then(m => m.OmniWebModule),
  },
  {
    path: 'omni-app',
    loadChildren: () => import('./pages/omni-app/omni-app.module').then(m => m.OmniAppModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
