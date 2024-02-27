import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // Static arrays for different categories of products
  // on a normal day this service should have api calls to the backend
  //to retrieve data then handles them depending on different categories
  public static limitedProducts: Product[] = [
    {id:1,productName: 'White Shoes',imgUrl: '../assets/products/limited/1.jpg',price: 100,quantity: 0,maximum:0,sale:0},
    {id:2,productName: 'Blue Bag',imgUrl: '../assets/products/limited/2.jpg',price: 100,quantity: 0,maximum:1,sale:0},
    {id:3,productName: 'White suit',imgUrl: '../assets/products/limited/3.jpg',price: 100,quantity: 0,maximum:1,sale:0},
    {id:4,productName: 'Headset',imgUrl: '../assets/products/limited/4.jpg',price: 100,quantity: 0,maximum:1,sale:0},
    {id:5,productName: 'Denim skirt',imgUrl: '../assets/products/limited/skirt.jpg',price: 100,quantity: 0,maximum:1,sale:0},
  ];
  private static remiseProducts: Product[] = [
    {id:6,productName: 'Blue hoodie',imgUrl: '../assets/products/remise/1.jpg',price: 100,quantity: 0,maximum:5,sale:15},
    {id:7,productName: 'Navy blue Dress',imgUrl: '../assets/products/remise/2.jpg',price: 100,quantity: 0,maximum:5,sale:5},
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

  constructor() { 
    ProductsService.loadProductsFromStorage();
  }

  static loadProductsFromStorage(): void {
    this.limitedProducts = JSON.parse(localStorage.getItem('limitedProducts') || '[]') as Product[];
    this.remiseProducts = JSON.parse(localStorage.getItem('remiseProducts') || '[]') as Product[];
    this.beautyProducts = JSON.parse(localStorage.getItem('beautyProducts') || '[]') as Product[];
    this.accessoriesProducts = JSON.parse(localStorage.getItem('accessoriesProducts') || '[]') as Product[];
    this.electroProducts = JSON.parse(localStorage.getItem('electroProducts') || '[]') as Product[];
  }
  static saveProductsToStorage(): void {
    localStorage.setItem('limitedProducts', JSON.stringify(this.limitedProducts));
    localStorage.setItem('remiseProducts', JSON.stringify(this.remiseProducts));
    localStorage.setItem('beautyProducts', JSON.stringify(this.beautyProducts));
    localStorage.setItem('accessoriesProducts', JSON.stringify(this.accessoriesProducts));
    localStorage.setItem('electroProducts', JSON.stringify(this.electroProducts));
  }

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
// On checkout, we update each prodcut maximum value
static updateProduct(id: number, product: Product) {
  // function to update product by ID
  function updateProductById(products: Product[], id: number, updatedProductData: Product) :Product[]{
    return products.map(p => p.id === id ? { ...p, ...updatedProductData } : p);
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

  // Save the updated product lists to localStorage
  this.saveProductsToStorage();
  }
}
