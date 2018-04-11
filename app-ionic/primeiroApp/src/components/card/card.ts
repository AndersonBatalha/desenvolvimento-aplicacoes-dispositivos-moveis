import { Component, Input } from '@angular/core';

/**
 * Generated class for the CardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'app-card',
  templateUrl: 'card.html'
})

export class CardComponent {
  @Input() feed:any = {}
  @Input() feed2:any = {}

  constructor() {
    console.log('Hello CardComponent Component');
  }

}