import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  fb:FormBuilder = new FormBuilder;
  ProductForm:any

  constructor(private productService:ProductService , private route:Router) { }

  ngOnInit(): void {
    this.ProductForm = this.fb.group({
      'productname': this.fb.control("",Validators.required),
      'type':this.fb.control("",Validators.required),
      'quantity':this.fb.control("",[Validators.min(1),Validators.required])
    })
  }

  submitForm(){
    this.productService.addProduct(this.ProductForm.value);
    this.route.navigate(['/product']);
  }

}
