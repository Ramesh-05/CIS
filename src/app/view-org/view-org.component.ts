import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { Organization } from '../organization';

@Component({
  selector: 'app-view-org',
  templateUrl: './view-org.component.html',
  styleUrls: ['./view-org.component.css']
})
export class ViewOrgComponent implements OnInit{

  organization:Organization;
  id:number;

    constructor(private authService:AuthServiceService,private router:Router,private route:ActivatedRoute){}

    ngOnInit(): void {
      this.organization=new Organization();
      this.id=this.route.snapshot.params['id'];
      this.authService.fetchOrganizationById(this.id).subscribe(data=>{
        this.organization=data;
      },
      error=>console.log(error));
    }

}
