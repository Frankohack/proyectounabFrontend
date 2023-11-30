import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Tab5Page } from './tab5.page';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Tab5Page],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: Tab5Page }])
  ],
})
export class Tab5PageModule {}

