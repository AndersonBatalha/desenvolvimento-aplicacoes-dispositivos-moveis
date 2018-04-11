import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TesteComponentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teste-componente',
  templateUrl: 'teste-componente.html',
})

export class TesteComponentePage {
  meuFeed:any = {
    'titulo': 'Título do Feed',
    'texto': 'lorem ipsum'
  }

  meuFeed2:any = {
    'titulo': 'Título do outro Feed',
    'texto': 'texto do feed'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TesteComponentePage');
  }

  testeValor(event) {
    console.log(event)
  }

}
