import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { CompanyInformation } from '../company-information';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit{

  companyInformation:CompanyInformation=new CompanyInformation();
  companyId:number;

  constructor(private authService:AuthServiceService,private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.companyId=this.route.snapshot.params['companyId'];
    this.authService.fetchCompanyById(this.companyId).subscribe(data=>{
      this.companyInformation=data;
      console.log(data);
    },
    error=>console.log(error));
  }

}
