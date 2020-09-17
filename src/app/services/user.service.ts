import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from "../models/user.model";
import { global } from "./global.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string;
  constructor(public _http: HttpClient) {
    this.url = global.url;
  }

  login(user): Observable<any> {

    let json = JSON.stringify(user);
    let params = 'json=' + json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url + 'user/login', params, { headers: headers });
  }
  register(user): Observable<any> {
  
    let json = JSON.stringify(user);
    let params = 'json='+json;
  
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    console.log(params)
    return this._http.post(this.url + 'user/create', params, { headers: headers });
  }
}
