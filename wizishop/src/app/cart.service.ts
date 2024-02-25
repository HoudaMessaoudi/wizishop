import { Injectable } from '@angular/core';
import { Product } from './models/Product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public static productSet: Set<Product> = new Set();
  private static productSetSubject: BehaviorSubject<Set<Product>> = new BehaviorSubject<Set<Product>>(CartService.productSet);
  public static productSet$: Observable<Set<Product>> = CartService.productSetSubject.asObservable();

  constructor() { }
  static getCartProducts(): Set<Product> {
    return this.productSet;
  }
  static addProductToCart(product: Product): void {
    this.productSet.add(product);
    this.productSetSubject.next(this.productSet);
  }
  static deleteProductFromCart(product: Product): void {
    this.productSet.delete(product);
    this.productSetSubject.next(this.productSet);
  }
  static getSetLength(): number {
    return this.productSet.size;
  }
  static clearSet() {
    this.productSet = new Set();
    this.productSetSubject.next(this.productSet);
  }
  static updateSet(product: Product){
    this.deleteProductFromCart(product);
    this.addProductToCart(product);
  }
  static getSubTotal() : number{
    let totalSum = 0;
    for (const product of this.productSet) {
      totalSum += product.quantity * product.price;
    }
    return totalSum;
  }
  static isProductInCart(product: Product) : boolean{
    return this.productSet.has(product);
  }
}
