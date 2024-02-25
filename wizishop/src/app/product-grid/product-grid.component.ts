import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Product } from '../models/Product';
import { ProductsService } from '../products.service';

@Component({
    selector: 'app-product-grid',
    standalone: true,
    templateUrl: './product-grid.component.html',
    styleUrl: './product-grid.component.css',
    imports: [ProductCardComponent]
})
export class ProductGridComponent implements OnInit{
  limitedProducts : Product[]=[];
  beautyProducts : Product[]=[];
  electroProducts : Product[]=[];
  remiseProducts : Product[]=[];
  accessoriesProducts : Product[]=[];
  ngOnInit(): void {
    this.limitedProducts = ProductsService.getLimitedProducts();
    this.beautyProducts = ProductsService.getBeautyProducts();
    this.electroProducts = ProductsService.getElectroProducts();
    this.remiseProducts = ProductsService.getRemiseProducts();
    this.accessoriesProducts = ProductsService.getAccessoriesProducts();
  }
}
