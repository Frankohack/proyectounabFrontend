import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab7Page } from './tab7.page';
import { HttpClientModule } from '@angular/common/http';
import { Tab7PageRoutingModule } from './tab7-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab7PageRoutingModule,
    HttpClientModule,
  ],
  declarations: [Tab7Page]
})
export class Tab7PageModule {}