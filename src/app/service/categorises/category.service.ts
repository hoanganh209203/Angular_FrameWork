import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // HttpClient
import { Observable } from 'rxjs';
import { Category } from '../../type/Category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiAdminUrl = 'https://65a66cb474cf4207b4effdca.mockapi.io/categories'; // khai bao apiUrl
  http = inject(HttpClient); // inject bien http
  constructor() { }

  getCategoryListAdmin(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiAdminUrl); //axios.get(apiUrl)
  }
}
