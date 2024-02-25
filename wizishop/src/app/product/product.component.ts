

import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product!: Product;

  increaseQuantity(): void {
    this.product.quantity++;
    CartService.updateProduct(this.product);
  }

  decreaseQuantity(): void {
    if (this.product.quantity > 1) {
      this.product.quantity--;
    }
    CartService.updateProduct(this.product);
  }

  addToWishlist(): void {
    
  }
  deleteProduct(){
    CartService.deleteProductFromCart(this.product);
    console.log(CartService.getCartProducts);
  }
}
