import { Component } from '@angular/core';
import {Cookie} from "../common/utils/cookie";

@Component({
  selector: 'app',
  template: `
  <p>Hello Angular Universal App</p>
  <p><a routerLink="/travel" routerLinkActive="active">travel</a>
  </p>
  <p><a routerLink="/offers/delhi-ncr" routerLinkActive="active" >local</a></p>
  
  <p><a routerLink="/user/purchases" routerLinkActive="active" >orders</a></p>
  
  <p><a routerLink="/user/credit" routerLinkActive="active" >credits</a></p>
  
  <p><a routerLink="/user/news-letter" routerLinkActive="active" >news-letter</a></p>
  
  <p><a routerLink="/user/profile" routerLinkActive="active" >profile</a></p>
  <p><router-outlet></router-outlet></p>
  
  `
})
export class App {
constructor(private _cookie:Cookie){
  console.log(_cookie.getAll());
}
}


