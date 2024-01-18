import { Component ,inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { Category } from '../../../type/Category';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../../service/categorises/category.service';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  cateService = inject( CategoryService);

  productList : Category[] = [];

  ngOnInit():void{
    this.cateService
    .getCategoryListAdmin()
    .subscribe((cate) => (this.productList = cate));
  }
}
