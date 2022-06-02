import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './Mainportal/footer/footer.component';
import { HeaderComponent } from './Mainportal/header/header.component';
import { HomeComponent } from './Mainportal/home/home.component';
import { ProductsComponent } from './Mainportal/products/products.component';
import { ViewcartComponent } from './Mainportal/viewcart/viewcart.component';

const routes: Routes = [
  {path:'header' , component:HeaderComponent},
  {path:'footer' , component:FooterComponent},
  {path:'Home' , component:HomeComponent},
  {path:'products' , component:ProductsComponent},
  {path:'' , component:ViewcartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
