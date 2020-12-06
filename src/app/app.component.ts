import { CrudFireService } from './services/crud-fire/crud-fire.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private crudFire: CrudFireService
  ) {

  }
  dataTitle = this.crudFire.fetchDataTitle();
  fetching = false;
  products = [];

  editMode = false;
  editIndex: number;

  @ViewChild('id') id: ElementRef;
  @ViewChild('name') name: ElementRef;
  @ViewChild('price') price: ElementRef;

  ngOnInit() {
    this.onFetchProduct();
  }


  // ADD PRODUCT
  onAddProduct(id, name, price) {

    if (this.editMode) {
      this.products[this.editIndex] = {
        id: id.value,
        name: name.value,
        price: price.value
      };
    } else {
      this.products.push({
        id: id.value,
        name: name.value,
        price: price.value
      });
    }

    this.id.nativeElement.value = '';
    this.name.nativeElement.value = '';
    this.price.nativeElement.value = '';
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
  onFetchProduct() {
    this.fetching = true;

    this.crudFire.fetchProduct().subscribe((response) => {
      const data = JSON.stringify(response);
      this.products = JSON.parse(data);
      this.fetching = false;
    }, (error) => {
      console.log(error);
    });
  }

  // DELETE
  onDeleteProduct(i: number) {
    if (confirm('Do you want to delete this product?')) {
      this.products.splice(i, 1);
      this.onSaveProduct();
    }
  }
  onEditProduct(index: number) {
    this.editMode = true;
    this.editIndex = index;
    this.id.nativeElement.value = this.products[index].id;
    this.name.nativeElement.value = this.products[index].name;
    this.price.nativeElement.value = this.products[index].price;
    console.log(this.products[index].price);
  }

  // onFetchTitle() {
  //   this.crudFire.fetchDataTitle
  // }
}
