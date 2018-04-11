import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the ContadorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'contador',
  templateUrl: 'contador.html'
})
export class ContadorComponent {

  @Input('inicial') valorInicial:number = 0;

  @Output() onMudarValor = new EventEmitter()

  private aumenta(){
    this.valorInicial++;
    this.onMudarValor.emit(this.valorInicial)
  }

  private diminui(){
    this.valorInicial--;
    this.onMudarValor.emit(this.valorInicial)
  }

  constructor() {
    console.log('Hello ContadorComponent Component');
  }

}
