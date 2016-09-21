import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {Home} from "./home/local/home.component";


/**
 * Created by kuldeepkeshwar on 18/09/16.
 */
const routes:Routes=[
  //{ path: '', component:Home,},
  //{ path: 'offers/:division', component: Local },
  //{ path: 'travel', component: Travel },

  //{ path:// 'offers/:division/:category', component: Local },
  //{ path: 'offers/:division/:category/:subCategory', component: Local },
  //{ path: 'offers/:division/:category/:subCategory/:subSubCategory', component: Local },
  //{ path: 'travel/:category', component: Local },
  //{ path: 'travel/:category/:subCategory', component: Local},
  //{ path: 'travel/:category/:subCategory/:subSubCategory', component: Local },
  //{ path: 'search/offers/:division/:searchKey', component: Local },

  //{ path: 'offer/travel/:location/:permalink/:id', component: Local },
  //{ path: 'offer/:division/:location/:permalink/:id', component: Local },


  //{ path: 'user/profile', component: Local },//,canActivate:[AuthManger]},
  // { path: 'user/credit', component: Local },//,canActivate:[AuthManger]},
  // { path: 'user/purchases', component: Local },//,canActivate:[AuthManger]},
  // { path: 'user/news-letter', component: Local },//,canActivate:[AuthManger]},
  // { path: 'user/favourite',component: Local},//,canActivate:[AuthManger]},

  // { path: 'payments/order-summary', component: Local },//,canActivate:[AuthManger]},
  // { path: 'payments/thank-you', component: Local },//,canActivate:[AuthManger]},

  // { path: 'forgot-password',component: Local},
  // { path: 'login', component: Local},
  // { path: 'sign-up', component: Local },

  // { path: 'help/aboutus', component: Local},
  // { path: 'help/policy', component: Local},
  // { path: 'help/promise', component: Local},
  // { path: 'help/contactus', component: Local},
  // { path: 'help/sitemap', component: Local},
  // { path: 'help/universalfineprint', component: Local}

  // { path: 'list-your-business',component: Local},

];
export const AppRouteModule:ModuleWithProviders=RouterModule.forRoot(routes);
