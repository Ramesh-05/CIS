import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit{

  userData:User;
  id:number;
  constructor(private userService:UserServiceService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.userData=new User();
    this.id=this.route.snapshot.params['memberId'];
  this.userService.fetchUserById(this.id).subscribe(data=>{
    this.userData=data;
  },error=>console.log(error)); 
      
  }

}
