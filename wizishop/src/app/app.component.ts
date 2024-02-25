import { Component, NgModule, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { MyheaderComponent } from "./myheader/myheader.component";
import { ProductModule } from "./product/product.module";
import { ProductListComponent } from "./product-list/product-list.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductGridComponent } from "./product-grid/product-grid.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { CartPageComponent } from "./cart-page/cart-page.component";





@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,
        FooterComponent,
        MyheaderComponent,
        ProductModule,
        ProductListComponent, 
        OrderSummaryComponent, 
        ProductCardComponent, 
        ProductGridComponent, 
        MainPageComponent, 
        CartPageComponent]
})
export class AppComponent implements OnInit {


  ngOnInit(): void {

  }
  title = 'wizishop';
  isCartViewToggled: boolean = false;

  // Function to handle the toggleCartView event from the child
  handleToggleCartView(): void {
    this.isCartViewToggled = !this.isCartViewToggled;
  }
}
