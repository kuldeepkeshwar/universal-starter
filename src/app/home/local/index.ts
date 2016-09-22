/**
 * Created by kuldeepkeshwar on 18/09/16.
 */
import {Home } from "./home.component";

import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeResolve} from "./home.resolve";

const routes:Routes=[
  { path: '',
    component: Home ,
    resolve: {
      data: HomeResolve
    }
  }
];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  declarations: [ Home ],
  providers:[HomeResolve]
})
export class LocalModule {
constructor(){
  console.log('LocalModule');
}

}
