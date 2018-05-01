import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataDrivenPage } from './data-driven';

@NgModule({
  declarations: [
    DataDrivenPage,
  ],
  imports: [
    IonicPageModule.forChild(DataDrivenPage),
  ],
})
export class DataDrivenPageModule {}
