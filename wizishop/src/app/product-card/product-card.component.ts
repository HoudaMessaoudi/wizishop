import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit{
  constructor(private cartService: CartService){

  }
  ngOnInit(): void {
    CartService.productSet$.subscribe(() => {
      this.isInCart=CartService.isProductInCart(this.product);
    });
  }
  @Input() product: Product=
  {id:0,productName: 'Shoes',imgUrl: '../../assets/pictures/blue-shoe.jpg',price: 100,quantity: 0,maximum:5,sale:0};
   // Assuming Product is an interface or class with properties like imgUrl, productName, price
   isInCart: boolean = false;

  addToCart() {
    CartService.addProductToCart(this.product);
  }
}
