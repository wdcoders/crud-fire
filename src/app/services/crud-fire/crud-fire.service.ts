import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudFireService {
  url = 'https://crud-fire-87d54-default-rtdb.firebaseio.com/products.json';

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  saveProduct(products: any[]) {
    return this.http.put(this.url, products, {headers: this.headers});
  }
}
