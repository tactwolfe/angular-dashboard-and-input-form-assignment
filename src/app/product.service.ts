import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productData:Array<any> = [];

  constructor() { }

  addProduct(data:any){
    data.id = this.productData.length+1;
    this.productData.push(data);
  }

  getProduct(){
    return this.productData;
  }

  getProductById(id:number){
    return this.productData.find(p => p.id == id);
  }
  updateProductById(id:any,data:any){
    let index = this.productData.findIndex( p => p.id == id);
    this.productData[index] = data;
    this.productData[index].id = index+1;
  }
  deleteProductById(id:number){
    let index = this.productData.findIndex( p => p.id == id);
    this.productData.splice(index,1);
  }
}
