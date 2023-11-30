import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Tab8Page } from './tab8.page';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Tab8Page],
  imports: [
    CommonModule,
    IonicModule,FormsModule,
    
    RouterModule.forChild([{ path: '', component: Tab8Page }]) 
  ],
})
export class Tab8PageModule {}
