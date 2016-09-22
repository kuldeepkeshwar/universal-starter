import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniversalModule } from 'angular2-universal';

import { App } from './app/app.component';
import {NodeModule, NodeHttpModule} from "angular2-platform-node/index";
import {AppRouteModule} from "./app/app.routes";
import {HomeModule} from "./app/home/index";
import {UserModule} from "./app/user/index";
import {PaymentModule} from "./app/payment/index";
import {DetailModule} from "./app/detail/index";
import {DiscoveryModule} from "./app/discovery/index";
import {ErrorModule} from "./app/error/index";
import {AuthModule} from "./app/Auth/index";
import {AboutModule} from "./app/about/index";
import {Cookie} from "./common/utils/cookie";
import {CookieNode} from "./common/utils/cookie-node";

@NgModule({
  bootstrap: [ App ],
  declarations: [ App ],
  imports: [
    UniversalModule,  NodeModule, NodeHttpModule,// and NodeJsonpModule are included
    FormsModule,AppRouteModule,
    HomeModule,UserModule,PaymentModule,DetailModule,DiscoveryModule,ErrorModule,AuthModule,
    AboutModule
  ],
  providers:[
    {provide:Cookie, useClass:CookieNode}
  ]
})
export class MainModule {

}
