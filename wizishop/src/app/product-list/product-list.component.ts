import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductModule } from "../product/product.module";

@Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    imports: [ProductModule]
})
export class ProductListComponent implements OnInit{
  ngOnInit(): void {

    const newProduct1: Product = {
      productName: 'Shoes',
      imgUrl: '../../assets/pictures/blue-shoe.jpg',
      price: 100,
      quantity: 6,
    };
    const newProduct2: Product = {
      productName: 'Skirt',
      imgUrl: '../../assets/pictures/skirt.jpg',
      price: 100,
      quantity: 6,
    };
    this.productList.push(newProduct1,newProduct2);
  }
  @Input() productList: Product[] = [];


  addProduct(product: Product) {
    this.productList.push(product);
  }
}
