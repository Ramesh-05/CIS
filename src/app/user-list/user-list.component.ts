import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  userdetails:User[];
  isAdmin:boolean=false;
  searchQuery: string='';
  searchResult: User[];
  constructor(private userService:UserServiceService,private router: Router){}
  ngOnInit(): void {
    this.userList();
    const data=JSON.parse(localStorage.getItem('adminData'));
    if(data.role==='ADMIN'){
      this.isAdmin=true;
    }else{
      this.isAdmin=false;
    }
  }
  userList(){
    this.userService.getAllUsers().subscribe(data=>{
      this.userdetails=data;
      console.log(data);
    });
}

updateUser(memberId:number){
  this.router.navigate(['/update-user',memberId]);
}

deleteUser(memberId:number){
  this.userService.deleteUsers(memberId).subscribe(data=>{
    console.log(data);
    this.userList();
    this.router.navigate(['/user-list']);
  },
error=>console.log(error));
}
UserDataView(memberId:number){
  this.router.navigate(['/view-user',memberId]);
}

// onSearch(event:Event):void{
//   event.preventDefault();
//   if(this.searchQuery){
//     this.searchResult = this.userdetails.filter(card=>
//       card.name.toLowerCase().includes(this.searchQuery.toLowerCase())
//     );
//   }else{
//     this.searchResult=this.userdetails;
//   }
// }

}
