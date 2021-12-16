import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private REST_API_SERVER="http://localhost:3000/";
  constructor(private httpClient:HttpClient) { }
  public sendGetRequest(endpoint:string){
    return this.httpClient.get(this.REST_API_SERVER+endpoint);
  }
}
