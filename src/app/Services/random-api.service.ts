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
url = 'https://randomuser.me/api/';
  constructor(private http: HttpClient) {} 
    SearchData(Title: string, Type: SearchType): Observable<any>{
        return this.http.get('${this.url}')
        .pipe(map (results => {
          console.log('RAW: ', results);
          return results['Search'] ;
        })
          //map (results => results['Search'])
        )
    }

    GetDetails(): Observable<any>{
      console.log
       return this.http.get('${this.url}');
     
    }
  
}
