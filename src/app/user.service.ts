import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData:Array<any> = [];

  constructor( private http:HttpClient) { }

  addUser(data:any){

    // data.id = this.userData.length+1;
    // this.userData.push(data);
    
    return this.http.post(`https://60c77a85afc88600179f5369.mockapi.io/user`,data);
  }

  getUser(){

    // return this.userData;

    return this.http.get(`https://60c77a85afc88600179f5369.mockapi.io/user`);
  }

  getUserById(id:number){

    // return this.userData.find(u => u.id == id);

    return this.http.get(`https://60c77a85afc88600179f5369.mockapi.io/user/${id}`);
  }
  updateUserById(id:any,data:any){

    // let index = this.userData.findIndex( u => u.id == id);
    // this.userData[index] = data;
    // this.userData[index].id = index+1;

    return this.http.put(`https://60c77a85afc88600179f5369.mockapi.io/user/${id}`,data);
  }
  deleteUserById(id:number){

    // let index = this.userData.findIndex( p => p.id == id);
    // this.userData.splice(index,1);

    return this.http.delete(`https://60c77a85afc88600179f5369.mockapi.io/user/${id}`);
  }
}

