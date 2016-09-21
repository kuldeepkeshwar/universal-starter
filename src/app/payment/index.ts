/**
 * Created by kuldeepkeshwar on 18/09/16.
 */
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {OrderSummary} from "./order-summary/order-summary.component";
import {ThankYou} from "./thank-you/thank-you.component";

 const routes:Routes=[
    { path: 'payments/order-summary', component: OrderSummary },//,canActivate:[AuthManger]},
    { path: 'payments/thank-you', component: ThankYou },//,canActivate:[AuthManger]},

 ];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  declarations:[OrderSummary,ThankYou]
})
export class PaymentModule {
constructor(){
  console.log('PaymentModule');
}
}
