import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Tab10Page } from './tab10.page';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [Tab10Page],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: Tab10Page }])
  ],
})
export class Tab10PageModule {}
