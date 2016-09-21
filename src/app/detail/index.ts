/**
 * Created by kuldeepkeshwar on 18/09/16.
 */
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

const routes:Routes=[
  //{ path: 'offer/travel/:location/:permalink/:id', component: Local },
  //{ path: 'offer/:division/:location/:permalink/:id', component: Local },

];
@NgModule({
  imports:[RouterModule.forChild(routes)]
})
export class DetailModule {
  constructor(){
    console.log('DetailModule');
  }
}
