import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [MainComponent],
  imports: [
    // CommonModule,
    MatTabsModule,
    SharedModule
  ],
  exports: [MainComponent],
  
})
export class MainModule { }
