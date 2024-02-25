import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductModule } from "../product/product.module";
import { CartService } from '../cart.service';
import { CommonModule, KeyValue, KeyValuePipe } from '@angular/common';
@Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    imports: [ProductModule,CommonModule,KeyValuePipe]
})
export class ProductListComponent implements OnInit{
  constructor(cartService:CartService){
  }
  ngOnInit(): void {
    this.productMap=CartService.getCartProducts();
  }
  @Input() productMap: Map<number, Product> = new Map();
  
}
