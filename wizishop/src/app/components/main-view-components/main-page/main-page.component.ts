import { Component } from '@angular/core';
import { ProductGridComponent } from '../product-grid/product-grid.component';


@Component({
    selector: 'app-main-page',
    standalone: true,
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css',
    imports: [ProductGridComponent]
})
export class MainPageComponent {
}
