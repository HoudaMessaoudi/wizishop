import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent {
  @Input() subtotal: number = 0;

  get tax(): number {
    return this.subtotal * 0.3;
  }

  get total(): number {
    return this.subtotal + this.tax;
  }
}
