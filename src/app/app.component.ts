import { Component } from '@angular/core';
import {Http} from "@angular/http";
import {Cookie} from "../common/utils/cookie";
//import {Cookie} from "../common/utils/cookie";

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles:[require('./app.component.scss')]
})
export class App {
  private data;
 constructor(private _cookie:Cookie){
   console.log(_cookie.getAll());


 }

}


