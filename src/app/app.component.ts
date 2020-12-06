import { CrudFireService } from './services/crud-fire/crud-fire.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crud-fire';
  products = [
    {
      id: 'p1',
      name: 'Laptop',
      price: '34000'
    }
  ];

  constructor(
    private crudFire: CrudFireService
  ) {

  }

  ngOnInit() {}


  // ADD PRODUCT
  onAddProduct(id, name, price) {
    this.products.push({
      id: id.value,
      name: name.value,
      price: price.value
    });
  }

  // SAVE PRODUCT
  onSaveProduct() {
    console.log(this.products);
    this.crudFire.saveProduct(this.products).subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  // FETCH PRODUCT
  onFetchProduct() {}

  // DELETE
  onDeleteProduct(i) {
    if (confirm('Do you want to delete this product?')) {
      this.products.splice(i, 1);
    }
  }
}
