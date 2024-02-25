import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import { OrderSummaryComponent } from "../order-summary/order-summary.component";
import { CartService } from '../cart.service';

@Component({
    selector: 'app-cart-page',
    standalone: true,
    templateUrl: './cart-page.component.html',
    styleUrl: './cart-page.component.css',
    imports: [ProductListComponent, OrderSummaryComponent]
})
export class CartPageComponent implements OnInit{
    ngOnInit(): void {
      CartService.productMap$.subscribe(() => {
        this.productMapSize=CartService.getMapLength();
      });
    }
      @Input() productMapSize: number = 0;
      @Output() toggleCartView: EventEmitter<void> = new EventEmitter<void>();

      handleCartToggle(){
        this.toggleCartView.emit();
      }
}

