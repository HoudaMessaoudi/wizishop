import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent implements OnInit {

  constructor(private toastr: ToastrService){}

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
  checkout(){
    this.toastr.success('Thank you for shopping','Checked out!' );
    CartService.checkout();
  }
}
