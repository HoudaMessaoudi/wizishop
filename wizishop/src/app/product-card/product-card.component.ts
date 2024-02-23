import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  constructor(private cartService: CartService){

  }
  @Input() product: Product=
  {productName: 'Shoes',imgUrl: '../../assets/pictures/blue-shoe.jpg',price: 100,quantity: 6};
   // Assuming Product is an interface or class with properties like imgUrl, productName, price
   isHovered: boolean = false;

  toggleHover() {
    this.isHovered = !this.isHovered;
  }

  addToCart() {
    CartService.addProductToCart(this.product);
  }
}
