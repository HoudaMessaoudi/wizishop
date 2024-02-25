import { Component, NgModule, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/common-components/footer/footer.component";
import { MyheaderComponent } from "./components/common-components/myheader/myheader.component";
import { ProductModule } from "./components/cart-view-components/product/product.module";
import { ProductListComponent } from "./components/cart-view-components/product-list/product-list.component";
import { OrderSummaryComponent } from "./components/cart-view-components/order-summary/order-summary.component";
import { ProductCardComponent } from "./components/main-view-components/product-card/product-card.component";
import { ProductGridComponent } from "./components/main-view-components/product-grid/product-grid.component";
import { MainPageComponent } from "./components/main-view-components/main-page/main-page.component";
import { CartPageComponent } from "./components/cart-view-components/cart-page/cart-page.component";
import { CommonModule } from '@angular/common';





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
        CommonModule, 
        MainPageComponent, 
        CartPageComponent,
      ]
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
