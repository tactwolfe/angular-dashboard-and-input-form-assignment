import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:Array<any>=[];
  refresh:any;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.loadProduct();
    this.refresh = setInterval(()=>{
      this.loadProduct();
    },3000)

  }

  ngOnDestroy() {
    clearInterval(this.refresh);
  }

  loadProduct(){
    this.productService.getProduct().subscribe((res:any)=>{
      this.productList = res ;
    })
  }



  deleteProduct(id:number){
    this.productService.deleteProductById(id).subscribe((res)=>{
      this.loadProduct();
    });
  }

}
