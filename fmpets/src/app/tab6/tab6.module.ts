import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Tab6Page } from './tab6.page';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [Tab6Page],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: Tab6Page }])
  ],
})
export class Tab6PageModule {}