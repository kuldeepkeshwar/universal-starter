/**
 * Created by kuldeepkeshwar on 18/09/16.
 */
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

const routes:Routes=[
  // { path: 'forgot-password',component: Local},
  // { path: 'login', component: Local},
  // { path: 'sign-up', component: Local },

];
@NgModule({
  imports:[RouterModule.forChild(routes)]
})
export class AuthModule {
  constructor(){
    console.log('AuthModule');
  }
}
