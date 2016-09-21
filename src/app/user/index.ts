/**
 * Created by kuldeepkeshwar on 18/09/16.
 */
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {Profile} from "./profile/profile.component";
import {Credit} from "./credits/credit.component";
import {Order} from "./orders/order.component";
import {NewsLetter} from "./news-letter/news-letter.component";

 const routes:Routes=[
   { path: 'user/profile', component: Profile },//,canActivate:[AuthManger]},
    { path: 'user/credit', component: Credit },//,canActivate:[AuthManger]},
    { path: 'user/purchases', component: Order },//,canActivate:[AuthManger]},
    { path: 'user/news-letter', component: NewsLetter }//,//,canActivate:[AuthManger]},
    //{ path: 'user/favourite',component: Local},//,canActivate:[AuthManger]},
 ];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  declarations: [ Profile,Order,Credit,NewsLetter ]
})
export class UserModule {
constructor(){
  console.log('UserModule');
}
}
