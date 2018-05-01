import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TesteComponentePage } from '../pages/teste-componente/teste-componente';
import { CardComponent } from './card/card';
import { ContadorComponent } from './contador/contador';

@NgModule({
	declarations: [
		CardComponent,
    	ContadorComponent,
	],
	imports: [IonicModule],
	exports: [
		CardComponent,
		ContadorComponent,
    ],
})
export class ComponentsModule {}
