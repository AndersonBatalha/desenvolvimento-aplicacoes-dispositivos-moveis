import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the TemplateDrivenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-template-driven',
  templateUrl: 'template-driven.html',
})
export class TemplateDrivenPage {

  @ViewChild('formulario') formulario:FormGroup;

  constructor(
    public toastCtrl: ToastController, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient) {

  }

  public onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log(form.value);
      this.http.post('https://reqres.in/api/register', form.value).subscribe(
        (sucesso)=>{
          this.toast("Sucesso " + sucesso)
          console.log(sucesso)
        },
        (erro) => {
          this.toast("Erro! " + erro)
        }
      )
    }
    else {
      this.toast("O formulário apresenta erros!");
    }
  }

  protected toast(mensagem: string) {
      let toast = this.toastCtrl.create({
        message: mensagem,
        duration: 3000,
        position:'top'
      });
      toast.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemplateDrivenPage');
    console.log(this.formulario)
  }

}
