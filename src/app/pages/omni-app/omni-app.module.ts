import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { OmniAppRoutingModule } from './omni-app-routing.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { AppheaderComponent } from './omni-app/components/layout/appheader/appheader.component';
import { OmniAppComponent } from './omni-app/omni-app.component';
import { SidebarComponent } from './omni-app/components/layout/sidebar/sidebar.component';


const COMPONENTS = [

   
]

@NgModule({
  declarations: [OmniAppComponent, AppheaderComponent, SidebarComponent],
  exports: [OmniAppComponent, AppheaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    OmniAppRoutingModule,
    MatTabsModule,
    MatSlideToggleModule,
    FormsModule,
    
  ]
})
export class OmniAppModule { }
