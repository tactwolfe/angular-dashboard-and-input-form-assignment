import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productData:Array<any> = [];

  constructor( private http:HttpClient) { }

  addProduct(data:any){
    // data.id = this.productData.length+1;
    // this.productData.push(data);
    return this.http.post(`https://60c77a85afc88600179f5369.mockapi.io/product`,data);
  }

  getProduct(){
    return this.http.get(`https://60c77a85afc88600179f5369.mockapi.io/product`);
  }

  getProductById(id:number){
    return this.http.get(`https://60c77a85afc88600179f5369.mockapi.io/product/${id}`);
  }
  updateProductById(id:any,data:any){
    // let index = this.productData.findIndex( p => p.id == id);
    // this.productData[index] = data;
    // this.productData[index].id = index+1;
    return this.http.put(`https://60c77a85afc88600179f5369.mockapi.io/product/${id}`,data);
  }
  deleteProductById(id:number){
    // let index = this.productData.findIndex( p => p.id == id);
    // this.productData.splice(index,1);
    return this.http.delete(`https://60c77a85afc88600179f5369.mockapi.io/product/${id}`);
  }
}
