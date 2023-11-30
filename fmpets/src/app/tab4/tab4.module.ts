import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Tab4Page } from './tab4.page';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [Tab4Page],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: Tab4Page }])
  ],
})
export class Tab4PageModule {}

