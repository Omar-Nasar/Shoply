import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private route: ActivatedRoute,
    private CategoryServe: ProductService
  ) {}


  public static CartNumber: number = 0;
  public static Search: any;
  categories:any[] = [];

  ngOnInit(): void {
    this.CategoryServe.GetAllCategories().subscribe({
      next: (categ) => {
        
        this.categories = categ;
        console.log(categ)
      }
    })
  }
  // set Searched(val: any) {
  //   NavbarComponent.Search = val;
  //   console.log(val);
  // }
  // get Searched() {
  //   return NavbarComponent.Search;
  // }
  get CartCount() {
    return NavbarComponent.CartNumber;
  }
}
