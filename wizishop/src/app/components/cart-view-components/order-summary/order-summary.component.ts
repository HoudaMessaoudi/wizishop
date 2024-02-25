import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
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

  //Subscribe to changes in the productMap to update subtotal
  ngOnInit(): void {
    CartService.productMap$.subscribe(() => {
      this.subtotal=CartService.getSubTotal();
    });
  }
  @Input() subtotal: number = CartService.getSubTotal();

   // Getter method to calculate the tax based on the subtotal
  get tax(): number {
    return this.subtotal * 0.03;
  }
  // Getter method to calculate the total
  get total(): number {
    return this.subtotal + this.tax;
  }
  // Method to handle the checkout 
  checkout(){
    // successful toast
    this.toastr.success('Thank you for shopping','Checked out!' );
    CartService.checkout();
  }
}
