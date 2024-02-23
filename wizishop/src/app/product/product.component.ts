

import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product!: Product;


  closeProduct(): void {
    // Add logic for closing the product
  }

  increaseQuantity(): void {
    this.product.quantity++;
  }

  decreaseQuantity(): void {
    if (this.product.quantity > 1) {
      this.product.quantity--;
    }
  }

  addToWishlist(): void {
    
  }
}
