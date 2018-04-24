import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HelloWorldPage } from '../hello-world/hello-world';
import { PostsProvider } from '../../providers/posts/posts';
import { DetalhesPage } from '../detalhes/detalhes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  protected posts:any;

  constructor(
    private loading: LoadingController, 
    public navCtrl: NavController, 
    public postsProv: PostsProvider) {

    let load = this.loading.create({content: 'carregando...'});
    load.present()
    
    this.postsProv.getAll().subscribe( 
      (sucesso)=>{
        this.posts = sucesso;
        load.dismiss();
      },
      (erro)=>{
        console.error('problema na requisição' + erro);
      }
    );
    console.log(this.posts)
  }

  protected abrirPosts(id:any) {
    this.navCtrl.push(DetalhesPage, {id: id})
  }

  private menu(pagina: string) {

    switch (pagina) {
      case "HelloWorldPage":
        this.navCtrl.push(HelloWorldPage)
        break;

      default:
        this.navCtrl.push(pagina)
        break;
    }

  }

}
