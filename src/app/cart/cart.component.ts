import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  public CartItems: any[] = [];
  IsEmpty: Boolean = true;

  TotalPrice: number = 0;
  TotalPriceAfterTax: number = 0;
  Tax: number = 4;

  constructor(
    private CartServ: ProductService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.CartItems = this.CartServ.CartItem;
    // if(this.CartItems.length == 0)
    // {
    //   this.IsEmpty = true;
    // }
    for (const prod of this.CartServ.CartItem) {
      prod.rating = 0;
      prod.price = 0;
    }
    // this.CartItems = this.CartServ.CartItem;
    // if (this.CartItems.length != 0) {
    //   this.IsEmpty = false;
    // }
  }

  RemoveProduct(prod_cart: any): void {
    this.CartServ.RemoveFromCart(prod_cart);
    NavbarComponent.CartNumber--;
    this.showToast();
    this.TotalPrice -= prod_cart.price;
    this.TotalPriceAfterTax -= prod_cart.price;
    console.log(this.CartItems.length);
    if (this.CartItems.length == 0 || this.TotalPrice == 0) {
      this.TotalPriceAfterTax = 0;
    }
  }

  icrement(prod_cart: any): void {
    prod_cart.rating++;
    prod_cart.price = prod_cart.discount_price * prod_cart.rating;
    console.log(prod_cart.discount_price);
    this.CalcTotalPrice();
  }
  decrement(prod_cart: any): void {
    prod_cart.rating--;
    if (prod_cart.rating <= 0) {
      prod_cart.rating = 0;
    }
    prod_cart.price = prod_cart.discount_price * prod_cart.rating;
    console.log(`Price = ${prod_cart.price}`);
    this.CalcTotalPrice();
  }

  CalcTotalPrice(): void {
    let net_price = 0;
    for (let prod of this.CartItems) {
      net_price += prod.price;
    }
    this.TotalPrice = net_price;
    if (this.TotalPrice > 0) {
      this.TotalPriceAfterTax = this.TotalPrice + this.Tax;
    } else {
      this.TotalPriceAfterTax = 0;
    }
  }

  showToast(): void {
    this.toastr.error('Item Removed', '', {
      timeOut: 1000,
    });
  }
}
