import { Component, OnInit } from '@angular/core';
import { CardDetails } from '../card-details';
import { ActivatedRoute } from '@angular/router';
import { CardServiceService } from '../card-service.service';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.css']
})
export class ViewCardComponent implements OnInit{

  cardDetails:CardDetails=new CardDetails();
  cardId:number;
  constructor(private cardService:CardServiceService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.cardId=this.route.snapshot.params['cardId'];
    this.cardService.getCardById(this.cardId).subscribe(data=>{
      this.cardDetails=data;
      console.log(data);
    })    
  }

}
