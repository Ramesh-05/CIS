import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { Organization } from '../organization';

@Component({
  selector: 'app-update-org',
  templateUrl: './update-org.component.html',
  styleUrls: ['./update-org.component.css']
})
export class UpdateOrgComponent implements OnInit{

  organization:Organization;
  id:number;
  constructor(private route:ActivatedRoute, private authService:AuthServiceService,private router:Router){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.organization=new Organization();
    this.authService.fetchOrganizationById(this.id).subscribe(data=>{
      this.organization=data;
    },
  error=>console.log(error));
  }

  onSubmit(){
    this.authService.updateOrganizationInformation(this.id,this.organization).subscribe(data=>{
      this.router.navigate(['/org-list']);
    })    
  }

}
