/**
 * Created by kuldeepkeshwar on 18/09/16.
 */
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LocalModule} from "./local/index";
import {TravelModule} from "./travel/index";
import {Home as Local} from "./local/home.component";
import {Home as Travel} from "./travel/home.component";

 const routes:Routes=[
   { path: '', component:Local, },
   { path: 'offers/:division',component:Local},
   { path: 'travel', component:Travel},
 ];
@NgModule({
  imports:[RouterModule.forChild(routes),
    LocalModule,TravelModule
  ]
})
export class HomeModule {
constructor(){
  console.log('HomeModule');
}
}
