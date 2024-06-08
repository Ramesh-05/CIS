import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  currentDateTime: Date;
  store: any;

  constructor(private router:Router,private authService:AuthServiceService) {
    this.currentDateTime = new Date();
    const userData=localStorage.getItem('userData');
    const data=localStorage.getItem('adminData');
    if(userData!=null){
      this.store=JSON.parse(userData);
    }else if(data!=null){
      this.store=JSON.parse(data);
    }
  }

  ngOnInit(): void {
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/user']);
  }

}
