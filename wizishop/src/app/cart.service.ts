import { Injectable } from '@angular/core';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public static productSet: Set<Product> = new Set();
  constructor() { }
  static getCartProducts(): Set<Product> {
    return this.productSet;
  }
  static addProductToCart(product: Product): void {
    console.log(this.productSet);
    this.productSet.add(product);
  }
  static deleteProductFromCart(product: Product): void {
    this.productSet.delete(product);
  }
  static getSetLength(): number {
    return this.productSet.size;
  }
  static clearSet(): number {
    return this.productSet.size;
  }
}
