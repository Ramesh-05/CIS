import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  adminLogin:AdminLogin1=new AdminLogin1();
  
  constructor(private http: HttpClient, private router: Router,private adminService:AdminServiceService) {}

  loginAdmin(){
    this.http.get(`http://localhost:9090/cis/admin/login?adminUsername=${this.adminLogin.adminUsername}&adminPassword=${this.adminLogin.adminPassword}`)
    .subscribe((Response:any)=>{
      
      if(Response!=null){
        // const bAdmin=JSON.parse(Response);
        if(Response.adminUsername==this.adminLogin.adminUsername && Response.adminPassword==this.adminLogin.adminPassword){
          
          const data= this.adminService.isLoggedIn()
          alert("admin login success..");
          // alert(Response.adminUsername)
          localStorage.clear();
          if(data==true){  
            localStorage.setItem("adminData",JSON.stringify(Response));
            this.router.navigate(['/home']);
          }else{
            localStorage.removeItem("adminData");
            localStorage.setItem("adminData",JSON.stringify(Response));
            this.router.navigate(['/home']);
          }
        }else{
          alert(' Invalid UserName And password');
        }
      }else{
        alert('login Failed..!');
    }
    })
  }
}
export  class AdminLogin1{
  adminUsername:String;
  adminPassword:String;
  constructor(){
    this.adminUsername="";
    this.adminPassword="";
  }
}
