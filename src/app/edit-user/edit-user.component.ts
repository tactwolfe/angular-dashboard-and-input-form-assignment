import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  fb:FormBuilder = new FormBuilder;
  UserForm:any;
  currentUserId = 0;
  currentUserData:any;

  constructor( private userService:UserService , private route:Router ,private activatedRoute:ActivatedRoute) {
    this.currentUserId = this.activatedRoute.snapshot.params.id;
   }

  async ngOnInit(): Promise<any> {
    await this.userService.getUserById(this.currentUserId).subscribe((res:any)=>{
      this.currentUserData = res;
      this.UserForm.patchValue(this.currentUserData);
    })

    this.UserForm = this.fb.group({
      'username':this.fb.control("",Validators.required),
      'phone':this.fb.control("",Validators.required),
      'age':this.fb.control("",Validators.required),
      'gender':this.fb.control("",Validators.required),
      'country':this.fb.control("",Validators.required)
    })

   

  }

  updateUser(){
    this.userService.updateUserById(this.currentUserId,this.UserForm.value).subscribe((res)=>{
      this.route.navigate(['/dashboard/user']);
    });

  }

}
