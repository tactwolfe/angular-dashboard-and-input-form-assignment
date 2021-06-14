import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  fb:FormBuilder = new FormBuilder;
  UserForm:any;

  constructor( private userService:UserService , private route:Router ) { }

  ngOnInit(): void {
    this.UserForm = this.fb.group({
      'username':this.fb.control("",Validators.required),
      'phone':this.fb.control("",Validators.required),
      'age':this.fb.control("",Validators.required),
      'gender':this.fb.control("",Validators.required),
      'country':this.fb.control("",Validators.required)
    })
  }

  submitForm(){
    this.userService.addUser(this.UserForm.value);
    this.route.navigate(['/user']);
  }

}
