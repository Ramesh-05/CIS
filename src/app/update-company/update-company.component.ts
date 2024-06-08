import { Component, OnInit } from '@angular/core';
import { CompanyInformation } from '../company-information';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  companyInformation:CompanyInformation;
  companyId: number;
  constructor(private authService:AuthServiceService,private router:Router,private route:ActivatedRoute){}

ngOnInit(): void {
  this.companyId=this.route.snapshot.params['companyId'];
  this.companyInformation=new CompanyInformation();
  this.authService.fetchCompanyById(this.companyId).subscribe(data=>{
    this.companyInformation=data;
  },
  error=>console.log(error));
}

  onSubmit(){
    this.authService.updateCompanyInformation(this.companyId,this.companyInformation).subscribe(data=>{
      this.router.navigate(['/company-list']);
    },error=>console.log(error));
  }

}
