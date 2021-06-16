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
  currentProductData:any;


  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) {
    this.currentProductId =this.activatedRoute.snapshot.params.id;
   }

  async ngOnInit(): Promise<any> {
    await this.productService.getProductById(this.currentProductId).subscribe((res:any)=>{
      this.currentProductData = res;
      this.ProductForm.patchValue(this.currentProductData);
    })

    this.ProductForm = this.fb.group({
      'productname': this.fb.control("",Validators.required),
      'type':this.fb.control("",Validators.required),
      'quantity':this.fb.control("",[Validators.min(1),Validators.required])
    })

   
    
  }

}
