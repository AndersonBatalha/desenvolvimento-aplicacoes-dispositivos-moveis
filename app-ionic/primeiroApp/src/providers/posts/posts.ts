import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PostsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostsProvider {
  private posts:Array<any> = [];

  constructor(private http: HttpClient) {
    console.log('Hello PostsProvider Provider');
  }

  public getAll() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  public getPost(id:number) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }

}
