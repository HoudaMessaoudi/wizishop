import { Injectable } from '@angular/core';
import { Product } from './models/Product';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private static productMap: Map<number, Product> = new Map();
  private static productMapSubject: BehaviorSubject<Map<number, Product>> = new BehaviorSubject<Map<number, Product>>(CartService.productMap);
  public static productMap$: Observable<Map<number, Product>> = CartService.productMapSubject.asObservable();

  constructor() { }

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

  static clearMap() {
    this.productMap.clear();
    this.productMapSubject.next(this.productMap);
  }

  static updateProduct(product: Product){
    this.addProductToCart(product);
    console.log(this.productMap);
  }

  static getSubTotal(): number {
    let totalSum = 0;
    this.productMap.forEach(product => {
      const discount = product.quantity * product.price * product.sale * 0.01;
      totalSum += (product.quantity * product.price) - discount;
    });
    return totalSum;
  }
  static checkout(){
    
    this.productMap.forEach(product =>{
      product.maximum= product.maximum-product.quantity;
      product.quantity=0;
      ProductsService.updateProduct(product.id,product)
      
    });
    this.clearMap();
  }

  static isProductInCart(product: Product): boolean {
    return this.productMap.has(product.id);
  }
}
