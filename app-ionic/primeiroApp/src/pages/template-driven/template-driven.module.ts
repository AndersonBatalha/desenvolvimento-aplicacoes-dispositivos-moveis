import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemplateDrivenPage } from './template-driven';

@NgModule({
  declarations: [
    TemplateDrivenPage,
  ],
  imports: [
    IonicPageModule.forChild(TemplateDrivenPage),
  ],
})
export class TemplateDrivenPageModule {}
