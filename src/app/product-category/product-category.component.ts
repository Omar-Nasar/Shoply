import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
})
export class ProductCategoryComponent {
  constructor(
    private route: ActivatedRoute,
    private ProductsServ: ProductService,
    private toastr: ToastrService
  ) {}

  products: any[] = [];

  ngOnInit(): void {
    let id = String(this.route.snapshot.paramMap.get('catid'));
    this.ProductsServ.GetSingleProductByCategory(id).subscribe({
      next: (data) => {
        this.products = data;
        console.log(data)
      }
    })
    // console.log(id);
  }

  
  AddCart(product: any): void {
    // console.log(product);
    this.ProductsServ.AddToCart(product);
    NavbarComponent.CartNumber++;
    this.showToast();
  }
  showToast(): void {
    this.toastr.success('Item Added', '', {
      timeOut: 1000,
    });
  }
}
