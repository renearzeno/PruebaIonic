import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomApiService } from '../Services/random-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

results: Observable<any>;

  constructor(private randomApi: RandomApiService) {}

  ionViewDidLoad(){
    this.randomApi.SearchData()
    .subscribe(
      (data) => { // Success
        this.results  = data['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  // CargarDetalle(){
  //     this.results = this.randomApi.GetDetails();
  //     console.log('my result: ', this.results)
  // }
  
ngOnInit(){}

}

