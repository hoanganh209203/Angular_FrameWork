import { Component, inject } from '@angular/core'; // khai bao inject
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductCardComponent } from '../../components/clients/product-card/product-card.component';
import { NgFor } from '@angular/common';
import { ServiceService } from '../../service/service.service'; // import services
import { Product } from '../../type/product';
import { HomePageComponent } from '../../components/clients/home-page/home-page.component';
import { NotFoundPageComponent } from '../../components/clients/not-found-page/not-found-page.component';
import { LoginPageComponent } from '../../components/clients/login-page/login-page.component';
import { RouterOutlet } from '@angular/router';

import { ProductDetailComponent } from '../../components/clients/product-detail/product-detail.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,LoginPageComponent,ProductDetailComponent,HeaderComponent, FooterComponent, ProductCardComponent, NgFor,HomePageComponent,NotFoundPageComponent],
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