import { Injectable,inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Product } from '../type/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //call API
  apiUrl = 'https://fakestoreapi.com/products';
  http = inject(HttpClient);
  constructor() { }
  getProductList(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl); //axios.get(apiUrl)
  }
  getDetailProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
