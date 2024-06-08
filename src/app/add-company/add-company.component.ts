import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { CompanyInformation } from '../company-information';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit{

  companyInformation:CompanyInformation;
  constructor(private authService:AuthServiceService, private router:Router){}
  ngOnInit(): void {
    this.companyInformation=new CompanyInformation();
  }

  onSubmit(){
    this.authService.createCompanyInformation(this.companyInformation).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/company-list']);
    },
    error=>console.log(error));
  }

}
