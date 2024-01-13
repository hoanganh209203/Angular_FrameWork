import { Component ,inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { Product, ProductAdmin } from '../../../type/product';
import { ServiceService } from '../../../service/service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  cateService = inject(ServiceService);

  productList : Product[] = [];

  ngOnInit():void{
    this.cateService
    .getProductListAdmin()
    .subscribe((category) => (this.productList = category));
  }
}
