import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './checkout/cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './checkout/payment/payment.component';
import { RestaurantViewComponent } from './home/restaurant-view/restaurant-view.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'restaurant-view',
    component: RestaurantViewComponent
  },
  {
    path: 'order',
    component: OrdersComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
