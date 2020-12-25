import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OmniAppComponent } from './omni-app/omni-app.component';



const routes: Routes = [
  {path:'',redirectTo:'main-app',pathMatch:'full'},
  { path: '', component: OmniAppComponent, 
children:[
  // {path:'main-app' , component: },
  
] },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmniAppRoutingModule { }
