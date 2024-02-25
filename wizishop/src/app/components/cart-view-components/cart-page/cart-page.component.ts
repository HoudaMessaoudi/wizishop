import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { OrderSummaryComponent } from "../order-summary/order-summary.component";
import { CartService } from '../../../services/cart.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
    selector: 'app-cart-page',
    standalone: true,
    templateUrl: './cart-page.component.html',
    styleUrl: './cart-page.component.css',
    imports: [ProductListComponent, OrderSummaryComponent]
})
export class CartPageComponent implements OnInit {
  @Input() productMapSize: number = 0;

  // EventEmitter for toggling the cart view
  @Output() toggleCartView: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
      // Subscribing to changes in the product map using the CartService's productMap$ observable
      CartService.productMap$.subscribe(() => {
          // Updating the productMapSize whenever the product map changes
          this.productMapSize = CartService.getMapLength();
      });
  }

  // Method to handle the cart toggle event
  handleCartToggle() {
      // Output the toggleCartView event
      this.toggleCartView.emit();
  }
}

