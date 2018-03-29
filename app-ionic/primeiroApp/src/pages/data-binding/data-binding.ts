import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DataBindingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-binding',
  templateUrl: 'data-binding.html',
})

export class DataBindingPage {

  private valorSalvo: string;
  private imgURL: string = "https://fakeimg.pl/350x200/?text=IONIC";
  private valorAtual: string = null
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataBindingPage');
  }

  private getValor() {
    return 2;
  }

  private botaClicadoEvent() {
    console.log('clicou no botão');
  }

  private textoDigitadoEvent(evento) {
    this.valorAtual = (evento.target as HTMLInputElement).value
  }

  private salvarTexto() {
    this.valorSalvo = this.valorAtual
  }

}
