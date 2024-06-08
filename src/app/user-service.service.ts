import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseURL = "http://localhost:9090/cis/user";

  constructor(private httpClient:HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}/fetchall`);
  }

  addUsers(user:User):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/save`,user)
  }

  fetchUserById(memberId:number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/fetch/${memberId}`);
  }
  updateUsers(memberId:number,user:User):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${memberId}`,user);
  }
  deleteUsers(memberId:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${memberId}`);
  }

  
  changePassword(memberId:number, oldPassword: string, newPassword: string): Observable<any> {
    const requestbody={
      oldPassword:oldPassword,
      newPassword:newPassword
    };
    return this.httpClient.put(`${this.baseURL}/changePassword/${memberId}`,requestbody).pipe(catchError(this.handleError));
}

private handleError(error: HttpErrorResponse) {
  let errorMessage = 'Unknown error!';
  if (error.error instanceof ErrorEvent) {
    // Client-side errors
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // Server-side errors
    errorMessage = error.error;
  }
  return throwError(errorMessage);
  }

isLoggedIn(){
  let token=localStorage.getItem('userData');
  if(token!=null){
    return true;
  }else{
    return false;
  }
}
logout(){
  localStorage.removeItem('userData');
  return true;
}

getToken(){
  return localStorage.getItem("userData");
}
IsAuthentication(){
  if(localStorage.getItem('userData')!=null){
    return true;
  }else{
    return false;
  }
}


}
