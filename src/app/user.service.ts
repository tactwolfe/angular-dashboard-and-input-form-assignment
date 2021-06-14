import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData:Array<any> = [];

  constructor() { }

  addUser(data:any){
    data.id = this.userData.length+1;
    this.userData.push(data);
  }

  getUser(){
    return this.userData;
  }

  getUserById(id:number){
    return this.userData.find(u => u.id == id);
  }
  updateUserById(id:any,data:any){
    let index = this.userData.findIndex( u => u.id == id);
    this.userData[index] = data;
    this.userData[index].id = index+1;
  }
  deleteUserById(id:number){
    let index = this.userData.findIndex( p => p.id == id);
    this.userData.splice(index,1);
  }
}

