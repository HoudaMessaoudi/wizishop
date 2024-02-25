import { Component, Input, OnInit } from '@angular/core';
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
        this.productMapSize=CartService.getMapLength();
    }
      @Input() productMapSize: number = 0;

}
