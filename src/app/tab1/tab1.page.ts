import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType, RandomApiService } from '../Services/random-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

results: Observable<any>;
searchTerm: string ='';
type: SearchType = SearchType.all;
  constructor(private randomApi: RandomApiService) {}


  CargarDetalle(){
      this.results = this.randomApi.GetDetails();
  }
  



}

