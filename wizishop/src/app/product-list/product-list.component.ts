import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductModule } from "../product/product.module";
import { CartService } from '../cart.service';

@Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    imports: [ProductModule]
})
export class ProductListComponent implements OnInit{
  constructor(cartService:CartService){
  }
  ngOnInit(): void {
    this.productList=CartService.getCartProducts();
  }
  @Input() productList: Set<Product> = new Set();;
  
}
