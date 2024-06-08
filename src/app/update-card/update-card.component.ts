import { Component } from '@angular/core';
import { CardDetails } from '../card-details';
import { ActivatedRoute, Router } from '@angular/router';
import { CardServiceService } from '../card-service.service';

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.css']
})
export class UpdateCardComponent {

  cardDetail:CardDetails;
  cardType:any={};
  cardId:number;
  constructor(private route:ActivatedRoute, private cardService:CardServiceService,private router:Router){}

  ngOnInit(): void {
    this.cardType=this.cardService.cardTypes();
    this.cardDetail=new CardDetails();
    this.cardId=this.route.snapshot.params['cardId'];
    this.cardService.getCardById(this.cardId).subscribe(data=>{
      this.cardDetail=data;
    },
    error=>console.log(error));
  }

  onSubmit(){
    this.cardService.updateCardData(this.cardId,this.cardDetail).subscribe(data=>{
      this.router.navigate(['/card-list']);
    })
  }

}
