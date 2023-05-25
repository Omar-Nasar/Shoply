import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public CartItem: any = [];
  private AllDataFlage:number = 0;
  private AllData:Observable<any> = new Observable();
  private AllCategoriesFlage:number = 0;
  private AllCategories:Observable<any> = new Observable();
  constructor(private http: HttpClient) {}

  GetData(): Observable<any> {
    return this.http.get(`https://fakestoreapi.com/products`);
  }
  GetAllData(): Observable<any> {
    if(this.AllDataFlage == 0)
    {
      console.log('hi');
      this.AllDataFlage = 1;
      this.AllData = this.http.get(`http://localhost:3000/api/products/`);
    }
    
    return this.AllData
  }
  GetSingleProduct(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/api/products/${id}`)
  }
  GetAllCategories():Observable<any>{
    if(this.AllCategoriesFlage == 0)
    {
      console.log('hi2');
      this.AllCategoriesFlage = 1;
      this.AllCategories = this.http.get(`http://localhost:3000/api/categories`)
    }
    return this.AllCategories
  }
  GetSingleProductByCategory(CatId:any):Observable<any>{
    console.log("Cat Id: ",CatId)
    return this.http.get(`http://localhost:3000/api/products?categories=${CatId}`)
  }
  AddToCart(product: any) {
    var mergedCartItem = Object.assign({}, product, { quantity: 1, item: 1 });
    // console.log(mergedCartItem);
    this.CartItem.push(mergedCartItem);
    // console.log(this.CartItem);
  }
  RemoveFromCart(product: any) {
    const index = this.CartItem.indexOf(product);
    this.CartItem.splice(index, 1);
  }
}
