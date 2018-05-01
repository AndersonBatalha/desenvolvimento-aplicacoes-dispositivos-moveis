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
import { FormLoginPageModule } from '../pages/form-login/form-login.module';
import { FormLoginPage } from '../pages/form-login/form-login';
import { TemplateDrivenPage } from '../pages/template-driven/template-driven';
import { DataDrivenPage } from '../pages/data-driven/data-driven';
import { TemplateDrivenPageModule } from '../pages/template-driven/template-driven.module';
import { DataDrivenPageModule } from '../pages/data-driven/data-driven.module';

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
    FormLoginPageModule,
    TemplateDrivenPageModule,
    DataDrivenPageModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HelloWorldPage,
    FormLoginPage,
    DetalhesPage,
    TemplateDrivenPage,
    DataDrivenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostsProvider,
  ]
})
export class AppModule {}
