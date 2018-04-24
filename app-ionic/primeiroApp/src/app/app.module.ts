import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HelloWorldPage } from '../pages/hello-world/hello-world';
import { TesteComponentePageModule } from '../pages/teste-componente/teste-componente.module';
import { DataBindingPageModule } from '../pages/data-binding/data-binding.module';
import { PostsProvider } from '../providers/posts/posts';
import { HttpClientModule } from '@angular/common/http';
import { DetalhesPageModule } from '../pages/detalhes/detalhes.module';
import { DetalhesPage } from '../pages/detalhes/detalhes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HelloWorldPage,
  ],
  imports: [
    BrowserModule,
    DataBindingPageModule,
    TesteComponentePageModule,
    HttpClientModule,
    DetalhesPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HelloWorldPage,
    DetalhesPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostsProvider,
  ]
})
export class AppModule {}
