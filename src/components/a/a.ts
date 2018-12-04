import { Component } from '@angular/core';
// import { InfiniteScroll } from 'ionic-angular/components/infinite-scroll/infinite-scroll';

/**
 * Generated class for the AComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'c',
  templateUrl: 'a.html'
})
export class AComponent {

  text: string;
  
  constructor() {
    console.log('Hello AComponent Component');
    this.text = '这是A组件';
    }

     get(){
       console.log('a组件的方法');
     }
  }
  
 
