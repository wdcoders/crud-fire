import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudFireService {
  url = 'https://crud-fire-87d54-default-rtdb.firebaseio.com/';

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  saveProduct(products: any[]) {
    return this.http.put(`${this.url}products.json`, products, {headers: this.headers});
  }

  fetchProduct() {
    return this.http.get(`${this.url}products.json`);
  }

  fetchDataTitle() {
    return this.http.get(`${this.url}dataTitle.json`);
  }
}
