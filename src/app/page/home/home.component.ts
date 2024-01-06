import { Component, inject } from '@angular/core'; // khai bao inject
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { NgFor } from '@angular/common';
import { ServiceService } from '../../service/service.service'; // import services
import { Product } from '../../type/product';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ProductCardComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productService = inject(ServiceService); 

  productList: Product[] = [];

  ngOnInit(): void {
    this.productService
      .getProductList()
      .subscribe((products) => (this.productList = products)); 
  }
  //contruct
}