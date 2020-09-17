import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable} from 'rxjs';
 import { global } from "./global.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public url : string; 
  constructor(public _http: HttpClient) {
      this.url = global.url;
   }

     newPost(post): Observable <any> {
      
        let json = JSON.stringify(post);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

      return this._http.post(this.url+'post/new',params, {headers:headers}); 
     }
    }
