import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product, ProductAdmin } from '../type/product';
import { Category } from '../type/Category';
import { Observable } from 'rxjs';
import { ProductAdd } from '../type/product';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //call API
  apiUrl = 'https://65a66cb474cf4207b4effdca.mockapi.io/products';
  apiAdminUrl = 'https://65a66cb474cf4207b4effdca.mockapi.io/products'; // khai bao apiUrl
  http = inject(HttpClient);

  constructor() { }


  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl); //axios.get(apiUrl)
  }
  getDetailProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
  getProductListAdmin(): Observable<ProductAdmin[]> {
    return this.http.get<ProductAdmin[]>(this.apiAdminUrl); //axios.get(apiUrl)
  }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>('https://65a66cb474cf4207b4effdca.mockapi.io/categories');
  }
  createProduct(product: ProductAdd) {
    return this.http.post<Product>(this.apiAdminUrl, product);
  }
  deleteProductById(id: string) {
    return this.http.delete(`${this.apiAdminUrl}/${id}`);
  }
}
