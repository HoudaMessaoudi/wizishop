
/* Component for product card on cart list */
import { Component, Input } from '@angular/core';
import { Product } from '../../../models/Product';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports: [CommonModule]
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
  }
}
