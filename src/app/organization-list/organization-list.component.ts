import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { Organization } from '../organization';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit{

  organization:Organization[];
  isAdmin: boolean=false;
  searchQuery: string='';
  searchResult: Organization[];

  constructor(private authService:AuthServiceService, private router:Router){}

  ngOnInit(){
    this.getAllOrganizationInformation();
    const data=JSON.parse(localStorage.getItem('adminData'));
    if(data.role==='ADMIN'){
      this.isAdmin=true;
    }else{
      this.isAdmin=false;
    }
  }
  getAllOrganizationInformation(){
    this.authService.getAllorganizationInfo().subscribe(data=>{
      this.organization=data;
    })
  }

  updateOrganizationInfo(id:number){
    this.router.navigate(['/update-organization',id]);
  }

  deleteOrganizationInformation(id:number){
    this.authService.deleteOrgById(id).subscribe(data=>{
      console.log(data);
      this.getAllOrganizationInformation();
      this.router.navigate(['/organization-list']);

    })
  }

  ViewAllOrganizationInformation(id:number){
    this.router.navigate(['/view-organization',id]);
  }

  // onSearch(event:Event):void{
  //   event.preventDefault();
  //   if(this.searchQuery){
  //     this.searchResult = this.organization.filter(card=>
  //       card.orgName.toLowerCase().includes(this.searchQuery.toLowerCase())
  //     );
  //   }else{
  //     this.searchResult=this.organization;
  //   }
  // }

}
