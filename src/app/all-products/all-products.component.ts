import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent {
  constructor(
    private ProductsServ: ProductService,
    private toastr: ToastrService
  ) {}

  showspinner: boolean = false;
  showdata: boolean = true;
  products: any[] = [];

 product: any[] = [];
  categories:any[] = [];

  AddCart(product: any): void {
    // console.log(product);
    this.ProductsServ.AddToCart(product);
    NavbarComponent.CartNumber++;
    this.showToast();
  }
  ngOnInit(): void {
    this.ProductsServ.GetAllData().subscribe({
      next: (prods) => {
        this.ShowSpinner();
        this.products = prods;
        this.product = this.products;
        console.log(this.product);
      },
    });
    this.ProductsServ.GetAllCategories().subscribe({
      next: (cats) => {
        this.categories = cats;
        // console.log(this.categories);
      }
    })
  }

  onchange(value: any): void {
    console.log(value);
    this.product = this.GetFilterdProducts(value);
    this.ShowSpinner();
    if (value == 'All Items') {
      this.product = this.products;
    }
  }

  GetFilterdProducts(val: string): any[] {
    return this.products.filter((prod) => prod.main_category == val);
  }

  showToast(): void {
    this.toastr.success('Item Added', '', {
      timeOut: 1000,
    });
  }

  ShowSpinner(): void {
    this.showspinner = true;
    this.showdata = false;
    setTimeout(() => {
      this.showspinner = false;
      this.showdata = true;
    }, 500);
  }
}
