import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  fb:FormBuilder = new FormBuilder;
  UserForm:any;
  currentUserId = 0;
  currentUserData:any;

  constructor( private userService:UserService, private activatedRoute:ActivatedRoute) { 
    this.currentUserId = this.activatedRoute.snapshot.params.id;
  }

  async ngOnInit():  Promise<any> {
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
}
