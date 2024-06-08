import { Component } from '@angular/core';
import { CardDetails } from '../card-details';
import { Router } from '@angular/router';
import { CardServiceService } from '../card-service.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent {

  cardDetail:CardDetails=new CardDetails();
  cardType:any={};
  constructor(private cardService:CardServiceService, private router:Router){}
  ngOnInit(): void {
    this.cardType=this.cardService.cardTypes();  
    
  }
  onSubmit(){
    this.cardService.createCard(this.cardDetail).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/card-list']);
    },
    error=>console.log(error));
  }

}
