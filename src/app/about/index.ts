/**
 * Created by kuldeepkeshwar on 18/09/16.
 */
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

const routes:Routes=[
  // { path: 'help/aboutus', component: Local},
  // { path: 'help/policy', component: Local},
  // { path: 'help/promise', component: Local},
  // { path: 'help/contactus', component: Local},
  // { path: 'help/sitemap', component: Local},
  // { path: 'help/universalfineprint', component: Local}

];
@NgModule({
  imports:[RouterModule.forChild(routes)]
})
export class AboutModule {
  constructor(){
    console.log('AboutModule');
  }
}
