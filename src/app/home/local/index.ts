/**
 * Created by kuldeepkeshwar on 18/09/16.
 */
import {Home } from "./home.component";

import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

const routes:Routes=[
  { path: '', component: Home }
];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  declarations: [ Home ]
})
export class LocalModule {
constructor(){
  console.log('LocalModule');
}
}
