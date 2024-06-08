import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private baseURL = "http://localhost:9090/cis/category";

  constructor(private httpClient:HttpClient) { }

  getAllCategories():Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.baseURL}/fetchall`);
  }

  addCategory(category:Category):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/save`,category);
  }

  fetchCategoryById(categoryId:number):Observable<Category>{
    return this.httpClient.get<Category>(`${this.baseURL}/fetch/${categoryId}`);
  }
  updateCategory(categoryId:number,category:Category):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${categoryId}`,category);
  }
  deleteCategory(categoryId:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${categoryId}`);
  }

}
