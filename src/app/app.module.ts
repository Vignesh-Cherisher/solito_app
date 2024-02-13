import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

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
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './checkout/payment/payment.component';
import { RestaurantViewComponent } from './home/restaurant-view/restaurant-view.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './checkout/cart/cart.component';
import { UserDataService } from './services/userData.service';
import { cartDishesService } from './services/cartDishes.service';
import { crossCommunicationService } from './services/crossCommunication.service';
import { HttpClientModule } from '@angular/common/http';
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
    RestaurantViewComponent,
    CheckoutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    MatTabsModule
  ],
  providers: [
    provideAnimationsAsync(),
    crossCommunicationService,
    cartDishesService,
    UserDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
