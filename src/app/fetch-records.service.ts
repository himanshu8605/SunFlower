import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FetchRecordsService {
  API_URL = 'https://api.github.com/search/users?q=';
  constructor(private httpClient: HttpClient) {}

 searchQuery = 'eric';
  getUserList(searchBy: string): Observable<any> {
    let searchQuery = 'eric';
    if (searchBy) {
      searchQuery = searchBy;
    }
    return this.httpClient.get(this.API_URL + searchQuery);
  }

  setUserList(searchBy: string): Observable<any> {
   
    if (searchBy) {
      this.searchQuery = searchBy;
    }
    return this.httpClient.get(this.API_URL + this.searchQuery);
  }



  private data;

  setData(data){
    this.data = data;
  }

  getData(){
    let temp = this.data;
    
    return temp;
  }



  getProfileUserList(): Observable<any> {
  
    return this.httpClient.get(this.data);
  }






}
