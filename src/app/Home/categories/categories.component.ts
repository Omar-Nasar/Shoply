import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  category: any[] = [
    {
      name: 'Men',
      count: 120,
      logo: '../../../assets/cat-1.jpg',
    },
    {
      name: 'Men',
      count: 120,
      logo: '../../../assets/cat-2.jpg',
    },
    {
      name: 'Men',
      count: 120,
      logo: '../../../assets/cat-3.jpg',
    },
    {
      name: 'Men',
      count: 120,
      logo: '../../../assets/cat-4.jpg',
    },
    {
      name: 'Men',
      count: 120,
      logo: '../../../assets/cat-1.jpg',
    },
    {
      name: 'Men',
      count: 120,
      logo: '../../../assets/cat-2.jpg',
    },
    {
      name: 'Men',
      count: 120,
      logo: '../../../assets/cat-3.jpg',
    },
    {
      name: 'Men',
      count: 120,
      logo: '../../../assets/cat-4.jpg',
    },
  ];
  categories:any[] =[];
  icone = "https://m.media-amazon.com/images/I/81G88Gum-1L.jpg";
  constructor(private CatServ:ProductService){}

  ngOnInit() {
    this.CatServ.GetAllCategories().subscribe({
      next: (cat) => {
        this.categories = cat;
        console.log()
      }
    })
  }
}
