import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //i used a map because its easier to update
  private static productMapSubject: BehaviorSubject<Map<number, Product>> = new BehaviorSubject<Map<number, Product>>(new Map());
  public static productMap$: Observable<Map<number, Product>> = CartService.productMapSubject.asObservable();


  constructor() {
    CartService.loadCartFromStorage();
  }

  static loadCartFromStorage(): void {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCartArray: [number, Product][] = JSON.parse(storedCart);
      const parsedCart = new Map<number, Product>(parsedCartArray.map(([key, value]) => [Number(key), value as Product]));
      this.productMapSubject.next(parsedCart);
    }
  }

  static saveCartToStorage(): void {
    const cartArray = Array.from(this.productMapSubject.getValue().entries());
    localStorage.setItem('cart', JSON.stringify(cartArray));
  }

  static getCartProducts(): Map<number, Product> {
    return this.productMapSubject.getValue();
  }

   static addProductToCart(product: Product): void {
    const currentMap = this.productMapSubject.getValue();
    currentMap.set(product.id, product);
    this.productMapSubject.next(currentMap);
    this.saveCartToStorage();
  }

  static deleteProductFromCart(product: Product): void {
    const currentMap = this.productMapSubject.getValue();
    currentMap.delete(product.id);
    this.productMapSubject.next(currentMap);
    this.saveCartToStorage();
  }

  

  static getMapLength(): number {
    return this.productMapSubject.getValue().size;
  }
// reset the cart- only called after checkout
 
static clearMap(): void {
  this.productMapSubject.next(new Map());
  localStorage.removeItem('cart');
}
  static updateProduct(product: Product){
    this.addProductToCart(product);
  }
// calculate the total price to pay
  static getSubTotal(): number {
    let totalSum = 0;
    this.productMapSubject.getValue().forEach(product => {
      const discount = product.quantity * product.price * product.sale * 0.01;
      totalSum += (product.quantity * product.price) - discount;
    });
    return totalSum;
  }
//checkout and buy the elements in the cart
  static checkout(){  
    this.productMapSubject.getValue().forEach(product =>{
      product.maximum= product.maximum-product.quantity;
      product.quantity=0; // reset selected quantity by user to 0
      ProductsService.updateProduct(product.id,product)  // update the global products stock 
    });
    this.clearMap();  // empty cart :D  
  }

  static isProductInCart(product: Product): boolean {
    return this.productMapSubject.getValue().has(product.id);
  }
}
