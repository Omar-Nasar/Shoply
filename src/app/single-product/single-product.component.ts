import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent {
  rec_products: any[] = [];
  product: any = {};
  size: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private ProductsServ: ProductService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    let id = String(this.route.snapshot.paramMap.get('id'));
    console.log(`id = ${id}`);
    this.ProductsServ.GetSingleProduct(id).subscribe({
      next: (prod) => {
        this.product = prod;
        if (this.product.main_category.includes('clothing')) {
          this.size = true;
        }
      }
    });   
  }

  AddCart(): void {
    this.ProductsServ.AddToCart(this.product);
    console.log(this.product);
    NavbarComponent.CartNumber++;
    this.showToast();
  }

  showToast(): void {
    this.toastr.success('Item Added', '', {
      timeOut: 2000,
    });
  }
}
