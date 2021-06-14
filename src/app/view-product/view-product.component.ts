import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  fb:FormBuilder = new FormBuilder;
  ProductForm:any
  currentProductId = 0;


  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) {
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

}
