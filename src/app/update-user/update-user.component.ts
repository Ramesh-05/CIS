import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userDetails:User=new User();
  memberId:number;

  constructor(private userService:UserServiceService, private route:ActivatedRoute, private router:Router){}
  
  ngOnInit(): void {
    this.memberId=this.route.snapshot.params['memberId'];
    this.userService.fetchUserById(this.memberId).subscribe(data=>{
      console.log(data);
      this.userDetails=data;
    },
    error=>console.log(error));


  }

  onSubmit(){
    this.userService.updateUsers(this.memberId,this.userDetails).subscribe(data=>{
      this.goToUserDetail();
    });

  }

  goToUserDetail(){
    this.router.navigate(['/userDetails']);
  }
}
