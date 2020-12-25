import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
