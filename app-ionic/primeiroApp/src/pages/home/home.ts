import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelloWorldPage } from '../hello-world/hello-world';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  private menu(pagina:string) {
    console.log('Clicou no botão')

    switch (pagina) {
      case "HelloWorldPage":
        this.navCtrl.push(HelloWorldPage)
        break;
    
      case "DataBindingPage":
        this.navCtrl.push(pagina)
        break;
    
      default:
        break;
    }

  }

}
