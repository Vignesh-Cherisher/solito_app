import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DishesComponent } from './home/dishes/dishes.component';
import { DishItemComponent } from './home/dishes/dish-item/dish-item.component';
import { FilterComponent } from './home/filter/filter.component';
import { RestaurantsComponent } from './home/restaurants/restaurants.component';
import { RestaurantItemComponent } from './home/restaurants/restaurant-item/restaurant-item.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './payment/payment.component';
import { RestaurantViewComponent } from './home/restaurant-view/restaurant-view.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    DishesComponent,
    DishItemComponent,
    FilterComponent,
    RestaurantsComponent,
    RestaurantItemComponent,
    LoginComponent,
    CartComponent,
    OrdersComponent,
    PaymentComponent,
    RestaurantViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
