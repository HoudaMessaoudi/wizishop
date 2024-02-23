import { Component } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import { OrderSummaryComponent } from "../order-summary/order-summary.component";

@Component({
    selector: 'app-cart-page',
    standalone: true,
    templateUrl: './cart-page.component.html',
    styleUrl: './cart-page.component.css',
    imports: [ProductListComponent, OrderSummaryComponent]
})
export class CartPageComponent {

}
