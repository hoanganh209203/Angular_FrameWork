import { Component ,OnInit } from '@angular/core';
import { Product } from '../../../type/product';
import { ServiceService } from '../../../service/service.service';
import { ActivatedRoute } from '@angular/router';
import { ProductRatingComponent } from '../product-rating/product-rating.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ProductRatingComponent,NgFor],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  productID: number = 0;
  productsAll: Product[] = [];
  product: Product = {
    id: 0,
    title: "",
    image: "",
    category: "",
    description: "",
    price: 0,
    rating: {
      rate: 0,
      count: 0,
    }
  }

  constructor(private ProductService: ServiceService, private route: ActivatedRoute) { 
    this.ProductService.getAllProducts().subscribe(data => {
      this.productsAll = data;

      console.log(this.productsAll);
    })
  }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const idPr = params.get('idPr');
      this.productID = Number(idPr);
    });

    this.ProductService.getDetailProduct(this.productID).subscribe(data => {
      this.product = data;
    })
  }
}
