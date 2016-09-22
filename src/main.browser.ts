import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniversalModule } from 'angular2-universal';

import { App } from './app/app.component';
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {AppRouteModule} from "./app/app.routes";
import {HomeModule} from "./app/home/index";
import {UserModule} from "./app/user/index";
import {ErrorModule} from "./app/error/index";
import {DiscoveryModule} from "./app/discovery/index";
import {DetailModule} from "./app/detail/index";
import {PaymentModule} from "./app/payment/index";
import {AuthModule} from "./app/Auth/index";
import {AboutModule} from "./app/about/index";
import {Cookie} from "./common/utils/cookie";
import {CookieBrowser} from "./common/utils/cookie-browser";

@NgModule({
  bootstrap: [ App ],
  declarations: [ App ],
  imports: [
    UniversalModule,  BrowserModule, HttpModule,// and JsonpModule are included
    FormsModule,AppRouteModule,
    HomeModule,UserModule,PaymentModule,DetailModule,DiscoveryModule,ErrorModule,AuthModule,
    AboutModule
  ],
  providers:[
    {provide:Cookie, useClass:CookieBrowser},
  ]
})
export class MainModule {

}
