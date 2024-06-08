import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardDetails } from './card-details';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  private baseURL="http://localhost:9090/cis/card";
  constructor(private httpClient:HttpClient) { }

  getCardList():Observable<CardDetails[]>{
    return this.httpClient.get<CardDetails[]>(`${this.baseURL}/fetchall`);
  }

  getCardTypes():Observable<any>{
    return this.httpClient.get(`${this.baseURL}/getAllCardTypes`);
  }

  createCard(cardDetail:CardDetails):Observable<object>{
    return this.httpClient.post(`${this.baseURL}/save`,cardDetail);
  }

  getCardById(cardId:number):Observable<CardDetails>{
    return this.httpClient.get<CardDetails>(`${this.baseURL}/fetch/${cardId}`);
  }

  updateCardData(cardId:number, cardDetail:CardDetails):Observable<object>{
    return this.httpClient.put(`${this.baseURL}/update/${cardId}`,cardDetail);
  }

  deleteCardById(cardId:number):Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${cardId}`);
  }

  cardTypes(){
    return [
      {
        id:1, name:"visa"
      },
      {
        id:2, name:"Advertising"
      },
      {
        id:3, name:"Master card"
      },
      {
        id:4, name:"Rupay"
      },
      {
        id:5,name:"business"
      }
    ]
  }
}
