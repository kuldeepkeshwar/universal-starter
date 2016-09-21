/**
 * Created by kuldeepkeshwar on 18/09/16.
 */
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

 const routes:Routes=[
   // { path: 'error-page', component:Local }
 ];
@NgModule({
  imports:[RouterModule.forChild(routes)]
})
export class ErrorModule {
constructor(){
  console.log('ErrorModule');
}
}
