import { Component ,inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductAdmin } from '../../../type/product';
import { ServiceService } from '../../../service/service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productService = inject(ServiceService);

  productList : ProductAdmin[] = [];

  ngOnInit():void{
    this.productService
    .getProductListAdmin()
    .subscribe((products) => (this.productList = products));
  }
}
