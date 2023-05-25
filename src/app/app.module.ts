import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './Home/header/header.component';
import { FormControl, FormsModule } from '@angular/forms';
import { SalebannerComponent } from './Home/salebanner/salebanner.component';
import { ForyouComponent } from './Home/foryou/foryou.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProuctRatingComponent } from './prouct-rating/prouct-rating.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AllProductsComponent } from './all-products/all-products.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { FeaturedComponent } from './Home/featured/featured.component';
import { CategoriesComponent } from './Home/categories/categories.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ReviewsComponent } from './single-product/reviews/reviews.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { SellWithUsComponent } from './sell-with-us/sell-with-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SalebannerComponent,
    ForyouComponent,
    FooterComponent,
    CartComponent,
    SingleProductComponent,
    ProuctRatingComponent,
    PageNotFoundComponent,
    AllProductsComponent,
    FeaturedComponent,
    CategoriesComponent,
    ContactUsComponent,
    MyAccountComponent,
    ReviewsComponent,
    ProductCategoryComponent,
    CheckOutComponent,
    SellWithUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxStarRatingModule,
    ToastrModule.forRoot({
      timeOut:800,
      progressAnimation: 'increasing',
      positionClass:'toast-top-full-width',
    }),
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
