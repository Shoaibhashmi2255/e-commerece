import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Mainportal/header/header.component';
import { FooterComponent } from './Mainportal/footer/footer.component';
import { HomeComponent } from './Mainportal/home/home.component';
import { ProductsComponent } from './Mainportal/products/products.component';
import { ViewcartComponent } from './Mainportal/viewcart/viewcart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ViewcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
