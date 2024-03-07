import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CatogriesComponent } from './catogries/catogries.component';
import { BrandComponent } from './brand/brand.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { UsedProductDetailsComponent } from './used-product-details/used-product-details.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full' ,title:"Shopfiy"},
  // {title:"shopfiy"},
  {path:"register" , component:RegisterComponent , title:"Shopfiy"},
  {path:"login" , component:LoginComponent, title:"Shopfiy"},
  {path:"home" , canActivate:[authGuard], component:HomeComponent, title:"Shopfiy"},
  {path:"products" ,canActivate:[authGuard], component:ProductsComponent, title:"Shopfiy"},
  {path:"catogries" ,canActivate:[authGuard], component:CatogriesComponent, title:"Shopfiy"},
  {path:"brand" ,canActivate:[authGuard], component:BrandComponent, title:"Shopfiy"}, 
  {path:"cart" ,canActivate:[authGuard], component:CartComponent, title:"Shopfiy"}, 
  {path:"usedprodcuttDetails/:productId" ,canActivate:[authGuard], component:UsedProductDetailsComponent, title:"Shopfiy"  },
  {path:"prodcuttDetails/:productId" ,canActivate:[authGuard], component:ProductDetailsComponent, title:"Shopfiy"},
  {path:"**" , component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
