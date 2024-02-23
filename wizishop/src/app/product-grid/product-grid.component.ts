import { Component } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
    selector: 'app-product-grid',
    standalone: true,
    templateUrl: './product-grid.component.html',
    styleUrl: './product-grid.component.css',
    imports: [ProductCardComponent]
})
export class ProductGridComponent {
  products = [
    {productName: 'Shoes',imgUrl: '../../assets/pictures/skirt.jpg',price: 100,quantity: 6},
    {productName: 'Shoes',imgUrl: '../../assets/pictures/blue-shoe.jpg',price: 100,quantity: 6},
    {productName: 'Shoes',imgUrl: '../../assets/pictures/skirt.jpg',price: 100,quantity: 6},
    {productName: 'Shoes',imgUrl: '../../assets/pictures/blue-shoe.jpg',price: 100,quantity: 6},
    {productName: 'Shoes',imgUrl: '../../assets/pictures/skirt.jpg',price: 100,quantity: 6},
    {productName: 'Shoes',imgUrl: '../../assets/pictures/blue-shoe.jpg',price: 100,quantity: 6},
    {productName: 'Shoes',imgUrl: '../../assets/pictures/blue-shoe.jpg',price: 100,quantity: 6},
    {productName: 'Shoes',imgUrl: '../../assets/pictures/skirt.jpg',price: 100,quantity: 6},
    {productName: 'Shoes',imgUrl: '../../assets/pictures/blue-shoe.jpg',price: 100,quantity: 6},
    // Add more products as needed
  ];

}
