import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormLoginPage } from './form-login';

@NgModule({
  declarations: [
    FormLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(FormLoginPage),
  ],
})
export class FormLoginPageModule {}
