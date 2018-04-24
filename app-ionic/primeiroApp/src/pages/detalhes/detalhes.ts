import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PostsProvider } from '../../providers/posts/posts';

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
  providers:[PostsProvider],
})

export class DetalhesPage {
  
  protected post: any;
  protected titulo: string;
  protected texto: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public PostProvider: PostsProvider,
    private loading: LoadingController
  ) {
    console.log(this.navParams.get('id'));
  }

  ionViewDidLoad() {
   let load = this.loading.create({ content: 'carregando...' });
    load.present()

    this.PostProvider.getPost(this.navParams.get('id')).subscribe( 
      (sucesso)=>{
        this.post = sucesso;
        this.titulo = this.post['title'];
        this.texto = this.post['body'];
        load.dismiss();
      },
      (erro)=>{
        console.error('problema na requisição' + erro);
      }
    );
  }

}
