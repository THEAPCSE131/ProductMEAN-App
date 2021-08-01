import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../appModels/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}

  addProduct(pro: Product) {
    return this.http.post(this.url, pro);
  }

  getProductList() {
    return this.http.get(this.url);
  }

  updateProduct(pro: Product) {
    return this.http.put(`${this.url}/${pro._id}`, pro);
  }

  deleteProduct(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
