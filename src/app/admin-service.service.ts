import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  isLogged:Boolean=false;

  private baseURL="http://localhost:8080/admin";
  constructor(private httpCliet:HttpClient) { }

  isLoggedIn(){
    let token=localStorage.getItem('adminData');
    if(token!=null){
      return true;
    }else{
      return false;
    }
  }
  logout(){
    localStorage.removeItem('admniData');
    return true;

  }

  getToken(){
    return localStorage.getItem("admniData");
  }
  IsAuthentication(){
    if(localStorage.getItem('adminData')){
      return true;
    }else{
      return false;
    }
  }
}
