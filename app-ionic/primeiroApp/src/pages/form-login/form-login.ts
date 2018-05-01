import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FormLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form-login',
  templateUrl: 'form-login.html',
})

export class FormLoginPage {
  public user = new Object

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {
    this.user = {
      usuario: "",
      senha: ""
    }
  }

  public validateForm() {
    if (this.user['usuario'].length <= 4 || this.user['usuario'].length > 50) {
      alert("Login inválido")
    }
    else {
      alert("Bem vindo, " + this.user['usuario'] + "!")      
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormLoginPage');
  }

}
