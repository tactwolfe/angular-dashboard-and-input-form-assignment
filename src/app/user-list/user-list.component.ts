import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList:Array<any> = [];

  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.userList = this.userService.getUser();

  }

  deleteUser(id:number){
    this.userService.deleteUserById(id);
  }

}
