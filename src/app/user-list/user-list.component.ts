import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList:Array<any> = [];
  refresh:any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.loadUser();
    this.refresh = setInterval(()=>{
      this.loadUser();
    },3000);
  }

  ngOnDestroy() {
    clearInterval(this.refresh);
  }
  

  loadUser(){
    this.userService.getUser().subscribe((res:any)=>{
      this.userList = res;
    })
  }

  deleteUser(id:number){
    this.userService.deleteUserById(id).subscribe((res)=>{
      this.loadUser();
    })
  }

}
