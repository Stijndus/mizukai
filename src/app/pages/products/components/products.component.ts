import { Component } from '@angular/core';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  public products: any[];

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Product 1',
        description: 'Description for product 1',
        price: 100,
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Description for product 2',
        price: 200,
      },
    ];
  }
}
