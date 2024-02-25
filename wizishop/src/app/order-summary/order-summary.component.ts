import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent implements OnInit {
  
  ngOnInit(): void {
    CartService.productMap$.subscribe(() => {
      this.subtotal=CartService.getSubTotal();
    });
  }
  @Input() subtotal: number = CartService.getSubTotal();
  get tax(): number {
    return this.subtotal * 0.03;
  }
  get total(): number {
    return this.subtotal + this.tax;
  }
}
