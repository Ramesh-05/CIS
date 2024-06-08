import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { CompanyInformation } from './company-information';
import { Organization } from './organization';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private companyBaseURL="http://localhost:9090/cis/company";
  private organizationBaseURL="http://localhost:9090/cis/organization";
  private apiUrl="http://localhost:9090/cis/admin";

  private role: string;

  constructor(private httpClient:HttpClient) { }
  getAllCompanyInformations():Observable<CompanyInformation[]>{
    return this.httpClient.get<CompanyInformation[]>(`${this.companyBaseURL}/fetchall`);
  }

  createCompanyInformation(companyInformation:CompanyInformation):Observable<object>{
    return this.httpClient.post(`${this.companyBaseURL}/save`,companyInformation);
  }

  fetchCompanyById(companyId:number):Observable<CompanyInformation>{
    return this.httpClient.get<CompanyInformation>(`${this.companyBaseURL}/fetch/${companyId}`);
  }

  updateCompanyInformation(companyId:number,companyInformation:CompanyInformation):Observable<object>{
    return this.httpClient.put(`${this.companyBaseURL}/update/${companyId}`,companyInformation);
  }

  deleteCompanyInformation(companyId:number):Observable<object>{
    return this.httpClient.delete(`${this.companyBaseURL}/delete/${companyId}`);
  }

  getAllorganizationInfo():Observable<Organization[]>{
    return this.httpClient.get<Organization[]>(`${this.organizationBaseURL}/fetchall`);
  }

  createOrganizationInfo(organization:Organization):Observable<object>{
    return this.httpClient.post(`${this.organizationBaseURL}/save`,organization);
  }

  fetchOrganizationById(id:number):Observable<Organization>{
    return this.httpClient.get<Organization>(`${this.organizationBaseURL}/fetch/${id}`);
  }

  updateOrganizationInformation(id:number,organization:Organization):Observable<object>{
    return this.httpClient.put(`${this.organizationBaseURL}/update/${id}`,organization);
  }

  deleteOrgById(id:number):Observable<object>{
    return this.httpClient.delete(`${this.organizationBaseURL}/delete/${id}`)
  }



  changePassword(id: number, oldPassword: string, newPassword: string): Observable<any> {
    const requestBody = {
      oldPassword: oldPassword,
      newPassword: newPassword
    };
    return this.httpClient.put(`${this.apiUrl}/changePassword/${id}`, requestBody)
      .pipe(
        catchError(this.handleError)
      );
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

  
  // Method to set role, called after user logs in
  setRole(role: string): void {
    this.role = role;
  }
  getRole(){
    return this.role;
  }

  isAdmin(): boolean {
    const data=localStorage.getItem('adminData');
    if(data!=null){
      return JSON.parse(data).role;
    }
    return this.role === 'user';
  }
}
