import { Component , inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { ServiceService } from '../../../service/service.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductAdmin } from '../../../type/product';
import { DescriptionPipe } from '../../../pipes/description.pipe';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [DescriptionPipe,RouterLink,NgFor,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent{
  productService = inject(ServiceService)
  productList: ProductAdmin[] = [];
 
  ngOnInit():void{
    this.productService
    .getProductListAdmin()
    .subscribe((product) => (this.productList = product)); // callApi.then(cb fuc)
  }
  handleDeleteProduct(id:string){
    if (window.confirm('Do you really remove product?')) {
      this.productService
        .deleteProductById(id)
        .subscribe(
          () =>
            (this.productList = this.productList.filter(
              (product) => product._id !== id
            ))
        );
    }
   
  }
}
