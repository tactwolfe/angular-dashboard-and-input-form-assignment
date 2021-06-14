import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  fb:FormBuilder = new FormBuilder;
  ProductForm:any
  currentProductId = 0;


  constructor(private productService:ProductService , private route:Router,private activatedRoute:ActivatedRoute) {
    this.currentProductId =this.activatedRoute.snapshot.params.id;
   }

  ngOnInit(): void {

    let currentProductData = this.productService.getProductById(this.currentProductId);

    this.ProductForm = this.fb.group({
      'productname': this.fb.control("",Validators.required),
      'type':this.fb.control("",Validators.required),
      'quantity':this.fb.control("",[Validators.min(1),Validators.required])
    })

    this.ProductForm.patchValue(currentProductData);

  }

  updateProduct(){
    this.productService.updateProductById(this.currentProductId,this.ProductForm.value);
    this.route.navigate(['/product']);
  }

}
