import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../../models/Product';

@Component({
  selector: 'app-myheader',
  standalone: true,
  imports: [],
  templateUrl: './myheader.component.html',
  styleUrl: './myheader.component.css'
})
export class MyheaderComponent implements OnInit {
  @Input() cartSize: number = CartService.getMapLength();
  // EventEmitter for toggling the cart view
  @Output() toggleCartView: EventEmitter<void> = new EventEmitter<void>();
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
      // Subscribing to changes in the product map using the CartService's productMap$ observable
      CartService.productMap$.subscribe((productList) => {
          // Updating the cartSize whenever the product map changes
          this.cartSize = CartService.getMapLength();
      });
  }

  onSpanClick(): void {
      this.toggleCartView.emit();
  }
}
