import { Component } from '@angular/core';
import { CardDetails } from '../card-details';
import { Router } from '@angular/router';
import { CardServiceService } from '../card-service.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  cardDetail:CardDetails[];
  isAdmin: boolean=false;
  searchQuery: string='';
  searchResult: CardDetails[];
  constructor(private cardservice:CardServiceService,private router: Router){}
  ngOnInit(): void {
    this.cardList();
    const data=JSON.parse(localStorage.getItem('adminData'));
    if(data.role==='ADMIN'){
      this.isAdmin=true;
    }else{
      this.isAdmin=false;
    }
  }

  cardList(){
    this.cardservice.getCardList().subscribe(data=>{
      this.cardDetail=data;
      console.log(data);
      this.router.navigate(['/card-list']);
    });
  }

  updateCard(cardId:number){
    this.router.navigate(['/update-card',cardId]);
  }

  deleteCard(cardId:number){
    this.cardservice.deleteCardById(cardId).subscribe(data=>{
      this.cardList();
      this.router.navigate(['/card-list']);
    })

  }
  cardDetailss(cardId:number){
    this.router.navigate(['/view-card',cardId]);
  }

  // onSearch(event:Event):void{
  //   event.preventDefault();
  //   if(this.searchQuery){
  //     this.searchResult = this.cardDetail.filter(card=>
  //       card.name.toLowerCase().includes(this.searchQuery.toLowerCase())
  //     );
  //   }else{
  //     this.searchResult=this.cardDetail;
  //   }
  // }
}
