import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //i used a map because its easier to update
  private static productMap: Map<number, Product> = new Map();
  private static productMapSubject: BehaviorSubject<Map<number, Product>> = new BehaviorSubject<Map<number, Product>>(CartService.productMap);
  public static productMap$: Observable<Map<number, Product>> = CartService.productMapSubject.asObservable();

  constructor() { }
// get current cart list
  static getCartProducts(): Map<number, Product> {
    return this.productMap;
  }

  static addProductToCart(product: Product): void {
    this.productMap.set(product.id, product);
    this.productMapSubject.next(this.productMap);
  }

  static deleteProductFromCart(product: Product): void {
    this.productMap.delete(product.id);
    this.productMapSubject.next(this.productMap);
  }

  static getMapLength(): number {
    return this.productMap.size;
  }
// reset the cart- only called after checkout
  static clearMap() {
    this.productMap.clear();
    this.productMapSubject.next(this.productMap);
  }

  static updateProduct(product: Product){
    this.addProductToCart(product);
  }
// calculate the total price to pay
  static getSubTotal(): number {
    let totalSum = 0;
    this.productMap.forEach(product => {
      const discount = product.quantity * product.price * product.sale * 0.01;
      totalSum += (product.quantity * product.price) - discount;
    });
    return totalSum;
  }
//checkout and buy the elements in the cart
  static checkout(){  
    this.productMap.forEach(product =>{
      product.maximum= product.maximum-product.quantity;
      product.quantity=0; // reset selected quantity by user to 0
      ProductsService.updateProduct(product.id,product)  // update the global products stock 
    });
    setTimeout(() => {
      this.clearMap();// i set a timer here so after checkout it doesnt immediately switch screen
    }, 5000);  // and scare you :D  
  }

  static isProductInCart(product: Product): boolean {
    return this.productMap.has(product.id); // check if product exists in cart
  }
}
