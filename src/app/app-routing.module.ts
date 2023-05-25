import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { HeaderComponent } from './Home/header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { SellWithUsComponent } from './sell-with-us/sell-with-us.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HeaderComponent },
  { path: 'products', component: AllProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products/:id', component: SingleProductComponent },
  { path: 'category/:catid', component: ProductCategoryComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'checkout', component: CheckOutComponent },
  { path: 'sell-with-us', component: SellWithUsComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
