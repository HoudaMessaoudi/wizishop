import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/Product';

@Component({
  selector: 'app-myheader',
  standalone: true,
  imports: [],
  templateUrl: './myheader.component.html',
  styleUrl: './myheader.component.css'
})
export class MyheaderComponent implements OnInit{
  @Output() toggleCartView: EventEmitter<void> = new EventEmitter<void>();
  constructor(cartService:CartService){
    
  }
  ngOnInit(): void {
    
  }
  onSpanClick(): void {
    this.toggleCartView.emit();
  }

}
