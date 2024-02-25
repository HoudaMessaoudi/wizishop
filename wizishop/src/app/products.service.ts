import { Injectable } from '@angular/core';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public static limitedProducts: Product[] = [
    {id:1,productName: 'White Shoes',imgUrl: '../assets/products/limited/1.jpg',price: 100,quantity: 0,maximum:0,sale:0},
    {id:2,productName: 'Blue Bag',imgUrl: '../assets/products/limited/2.jpg',price: 100,quantity: 0,maximum:1,sale:0},
    {id:3,productName: 'White suit',imgUrl: '../assets/products/limited/3.jpg',price: 100,quantity: 0,maximum:1,sale:0},
    {id:4,productName: 'Headset',imgUrl: '../assets/products/limited/4.jpg',price: 100,quantity: 0,maximum:1,sale:0},
    {id:5,productName: 'Denim skirt',imgUrl: '../assets/products/limited/skirt.jpg',price: 100,quantity: 0,maximum:1,sale:0},
  ];
  private static remiseProducts: Product[] = [
    {id:6,productName: 'Blue hoodie',imgUrl: '../assets/products/remise/1.jpg',price: 100,quantity: 0,maximum:5,sale:15},
    {id:7,productName: 'Aestatic dress',imgUrl: '../assets/products/remise/2.jpg',price: 100,quantity: 0,maximum:5,sale:5},
    {id:8,productName: 'Belt',imgUrl: '../assets/products/remise/3.jpg',price: 100,quantity: 0,maximum:5,sale:25},
    {id:9,productName: 'Swan earings',imgUrl: '../assets/products/remise/4.jpg',price: 100,quantity: 0,maximum:5,sale:55},
    {id:10,productName: 'Kitchen gadgets',imgUrl: '../assets/products/remise/5.jpg',price: 100,quantity: 0,maximum:5,sale:65},
    {id:11,productName: 'blue shoe',imgUrl: '../assets/products/remise/blue-shoe.jpg',price: 100,quantity: 0,maximum:5,sale:17},
  ];
  private static beautyProducts: Product[] = [
    {id:12,productName: 'Face Serum',imgUrl: '../assets/products/beauty/1.jpg',price: 100,quantity: 0,maximum:5,sale:0},
    {id:13,productName: 'liquid shadowing',imgUrl: '../assets/products/beauty/2.png',price: 100,quantity: 0,maximum:5,sale:0},
    {id:14,productName: 'liquid shadowing',imgUrl: '../assets/products/beauty/3.jpg',price: 100,quantity: 0,maximum:5,sale:0},
    {id:15,productName: 'Red Lipstick',imgUrl: '../assets/products/beauty/4.jpg',price: 100,quantity: 0,maximum:5,sale:0},
    {id:16,productName: 'Brushes',imgUrl: '../assets/products/beauty/5.jpg',price: 100,quantity: 0,maximum:5,sale:0},


  ];
  private static accessoriesProducts: Product[] = [
    {id:17,productName: 'Necklace',imgUrl: '../assets/products/accessories/1.jpg',price: 100,quantity: 0,maximum:5,sale:0},
    {id:18,productName: 'Red earings',imgUrl: '../assets/products/accessories/2.jpg',price: 100,quantity: 0,maximum:5,sale:0},
    {id:19,productName: 'Sunglasses',imgUrl: '../assets/products/accessories/3.jpg',price: 100,quantity: 0,maximum:5,sale:0},


  ];
  private static electroProducts: Product[] = [
    {id:20,productName: 'Iphone',imgUrl: '../assets/products/electro/1.jpg',price: 100,quantity: 0,maximum:5,sale:0},
    {id:21,productName: 'Laptop',imgUrl: '../assets/products/electro/2.jpg',price: 100,quantity: 0,maximum:5,sale:0},
    {id:22,productName: 'Tablet',imgUrl: '../assets/products/electro/3.jpg',price: 100,quantity: 0,maximum:5,sale:0},
    {id:23,productName: 'Headphones',imgUrl: '../assets/products/electro/4.jpg',price: 100,quantity: 0,maximum:5,sale:0},
  ];

  constructor() { }

  static getLimitedProducts(): Product[] {
    
    return this.limitedProducts;
  }

  static getRemiseProducts(): Product[] {
    return this.remiseProducts;
  }

  static getBeautyProducts(): Product[] {
    return this.beautyProducts;
  }

  static getAccessoriesProducts(): Product[] {
    return this.accessoriesProducts;
  }

  static getElectroProducts(): Product[] {
    return this.electroProducts;
  }

  static updateProduct(id: number,product : Product){
    function updateProductById(products: Product[], id: number, updatedProductData: Partial<Product>) :Product[]{
      for (let i = 0; i < products.length; i++) {
          if (products[i].id === id) {
            products[i] = { ...products[i], ...updatedProductData };
            return products;
          }
      }
      return products;
  }

switch (true) {
  case (id >= 1 && id < 6): {
    this.limitedProducts = updateProductById(this.limitedProducts,id,product);
    break;
  }
  case (id >= 6 && id < 12): {
    this.remiseProducts = updateProductById(this.remiseProducts,id,product);
    break;
  }
  case (id >= 12 && id < 17): {
    this.beautyProducts = updateProductById(this.beautyProducts,id,product);
    break;
  }
  case (id >= 17 && id < 20): {
    this.accessoriesProducts = updateProductById(this.accessoriesProducts,id,product);
    break;
  }
  case (id >= 20 && id < 24): {
    this.accessoriesProducts = updateProductById(this.electroProducts,id,product);
    break;
  }
}
  }
}
