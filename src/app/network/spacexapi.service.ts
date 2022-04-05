import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  constructor(private httpClient:HttpClient) { }
  API ='https://api.spacexdata.com/v3/launches'

  public getAll(){
    return this.httpClient.get(this.API)
  }

  public getById(id:Number) {
    return this.httpClient.get(this.API +`/${id}`)
  }  
}
