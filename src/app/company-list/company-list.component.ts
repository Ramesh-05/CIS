import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { CompanyInformation } from '../company-information';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {

  companyInformation:CompanyInformation[];
  isAdmin: boolean=false;
  searchQuery: string='';
  searchResult: CompanyInformation[];

  constructor(private router:Router,private authService:AuthServiceService){}
  ngOnInit(): void {
    this.getAllCompanyInformation();
    const data=JSON.parse(localStorage.getItem('adminData'));
    if(data.role==='ADMIN'){
      this.isAdmin=true;
    }else{
      this.isAdmin=false;
    }
  }

  getAllCompanyInformation(){
    this.authService.getAllCompanyInformations().subscribe(data=>{
      this.companyInformation=data;
      console.log(data);
    });
  }

  updateCompanyInfo(companyId:number){
    this.router.navigate(['/update-company',companyId]);
  }

  deleteCompanyInformation(companyId:number){
    this.authService.deleteCompanyInformation(companyId).subscribe(data=>{
      console.log(data);
      this.getAllCompanyInformation();
      this.router.navigate(['/company-list']);
    },error=>console.log(error));
  }

  fullCompanyInformation(companyId:number){
    this.router.navigate(['/view-company',companyId]);
  }

  // onSearch(event:Event):void{
  //   event.preventDefault();
  //   if(this.searchQuery){
  //     this.searchResult = this.companyInformation.filter(card=>
  //       card.companyName.toLowerCase().includes(this.searchQuery.toLowerCase())
  //     );
  //   }else{
  //     this.searchResult=this.companyInformation;
  //   }
  // }

}
