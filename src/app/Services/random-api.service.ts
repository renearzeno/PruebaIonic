import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

export enum SearchType{
  all = '',
  Usuario = 'Usuario'
}


@Injectable({
  providedIn: 'root'
})
export class RandomApiService {
url = 'https://randomuser.me/api/1.2/';
  constructor(private http: HttpClient) {} 
    SearchData(): Observable<any>{
        return this.http.get('${this.url}?results=10')
        .pipe(map (results => results
        )
          //
        )
    }

    GetDetails(): Observable<any>{
      console.log
       return this.http.get('${this.url}?results=10').pipe(
        map (results => {
          console.log('Raw: ', results);                  
          return results['Search']
          
        })
       );
     
    }
  
}
