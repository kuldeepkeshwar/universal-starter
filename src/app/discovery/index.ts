/**
 * Created by kuldeepkeshwar on 18/09/16.
 */
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

const routes:Routes=[
  //{ path:// 'offers/:division/:category', component: Local },
  //{ path: 'offers/:division/:category/:subCategory', component: Local },
  //{ path: 'offers/:division/:category/:subCategory/:subSubCategory', component: Local },
  //{ path: 'travel/:category', component: Local },
  //{ path: 'travel/:category/:subCategory', component: Local},
  //{ path: 'travel/:category/:subCategory/:subSubCategory', component: Local },
  //{ path: 'search/offers/:division/:searchKey', component: Local },
  //{ path: 'favourite',component:Discovery,canActivate:[AuthManger]},
  //{ path: 'favourite/:division/:category', component: Discovery,canActivate:[AuthManger] },
  //{ path: 'favourite/:division/:category/:subCategory', component: Discovery,canActivate:[AuthManger] },
  //{ path: 'favourite/:division/:category/:subCategory/:subSubCategory', component: Discovery,canActivate:[AuthManger] },
];
@NgModule({
  imports:[RouterModule.forChild(routes)]
})
export class DiscoveryModule {
  constructor(){
    console.log('DiscoveryModule');
  }
}
