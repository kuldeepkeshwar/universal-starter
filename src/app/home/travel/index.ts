/**
 * Created by kuldeepkeshwar on 18/09/16.
 */

import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {Home} from "./home.component";

const routes:Routes=[
  { path: '', component: Home }
];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  declarations: [ Home ]
})
export class TravelModule {
  constructor(){
    console.log('TravelModule');
  }
}
