import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product} from '../../../type/product';
import { Category } from '../../../type/Category';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ServiceService } from '../../../service/service.service';
import { NgFor } from '@angular/common';
import { CategoryService } from '../../../service/categorises/category.service';
@Component({
  selector: 'app-creat-product',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './creat-product.component.html',
  styleUrl: './creat-product.component.css'
})
export class CreatProductComponent {
  categoryService = inject(CategoryService); // inject vao bien
  productService = inject(ServiceService); // inject vao bien
  router = inject(Router);
  productAdd : Omit<Product, "id"> = {
    title: "",
    price: 0,
      image: "",
      description: "",
      rate: 0,
      category: "",
    }
    categoryList: Category[] = [];
    ngOnInit(): void {
      this.categoryService
        .getCategoryListAdmin()
        .subscribe((categories) => (this.categoryList = categories)); // callApi.then(cb fuc)
    }

handleSubmit() {
  // console.log(this.productAdd);
    this.productService
      .createProduct(this.productAdd)
      .subscribe(() => this.router.navigate(['/admin/product']));
    // call service api POST products
  
}
}

