import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable} from 'rxjs';
 import { User } from "../models/user.model";
 import { global } from "./global.service";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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

      return this._http.post(this.url+'register',params, {headers:headers}); 
     }
    }
