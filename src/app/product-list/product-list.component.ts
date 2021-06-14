import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:Array<any>=[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.productList = this.productService.getProduct();
    
  }

  deleteProduct(id:number){
    this.productService.deleteProductById(id);
  }

}
