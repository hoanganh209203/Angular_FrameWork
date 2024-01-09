import { Component,Input, OnInit } from '@angular/core';
import { NgFor ,NgIf  } from '@angular/common';
@Component({
  selector: 'app-product-rating',
  standalone: true,
  imports: [NgFor ,NgIf],
  templateUrl: './product-rating.component.html',
  styleUrl: './product-rating.component.css'
})
export class ProductRatingComponent implements OnInit {
  @Input() rateInit: number = 0;

  ratePr: number = 0;

  rates: number[] = [1, 2, 3, 4, 5];

  constructor() {}
  ngOnInit(): void {
    this.ratePr = Math.round(this.rateInit);
  }
}
