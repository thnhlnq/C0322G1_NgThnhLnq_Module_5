import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  id: number;

  name: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.products = this.productService.getAll();
  }

  openDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete(id: number) {
    this.productService.deleteProduct(id);
    this.products = this.productService.getAll();
  }
}