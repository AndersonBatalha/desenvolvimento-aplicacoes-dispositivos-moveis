import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TesteComponentePage } from './teste-componente';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TesteComponentePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(TesteComponentePage),
  ],
})
export class TesteComponentePageModule {}
