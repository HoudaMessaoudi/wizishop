/**
 * Interface representing a product
 */
export interface Product {
  /**
   * Unique identifier for the product.
   */
  id: number;

  /**
   * The name of the product.
   */
  productName: string;

  /**
   * The URL of the product image.
   */
  imgUrl: string;

  /**
   * The price of the product.
   */
  price: number;

  /**
   * The quantity of the product selected by the user (yeah not very optimal to store it here :D).
   */
  quantity: number;

  /**
   * The maximum amount on stock.
   */
  maximum: number;

  /**
   * The sale or discount percentage applied to the product.
   */
  sale: number;
}
