import { Component } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userDetail:User=new User();

  constructor(private router:Router, private http:HttpClient,private userService:UserServiceService,private authService:AuthServiceService){}

  userLogin(){
    this.http.get(`http://localhost:9090/cis/user/login?emailId=${this.userDetail.name}&password=${this.userDetail.password}`).subscribe((Response:any)=>{
      
      if(Response!=null){
        // const bAdmin=JSON.parse(Response);
        if(Response.name==this.userDetail.name && Response.password==this.userDetail.password){
          const data= this.userService.isLoggedIn()
          this.authService.setRole(Response.role);
          alert("User login success..");
          // alert(Response.emailId)
          localStorage.clear();
          if(data==true){  
            localStorage.setItem("userData",JSON.stringify(Response));
            this.router.navigate(['/home']);
          }else{
            localStorage.removeItem("userData");
            localStorage.setItem("userData",JSON.stringify(Response));
            this.router.navigate(['/home']);
          }
        }else{
          alert(' Invalid emailId And password');
        }
      }else{
        alert('login Fail..!');
    }
    })

}

}
