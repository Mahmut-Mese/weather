import { Component, OnChanges,Input } from '@angular/core';
import { Weather } from 'src/app/model/weather';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnChanges {
  @Input() citiesWeather: Weather[]
  morning:Date;
  afternoon:Date;
  evening:Date;
  night:Date;

  constructor() {
    const date = new Date(); 
    const day =  date.getDate()
    const month = date.getMonth() +1;
    const year =  date.getFullYear();
    const today = year +"-"+ month +"-"+ day;
    console.log(today);
    

    this.morning   = new Date(today +  " 06:00:00");
    this.afternoon = new Date(today +  " 12:00:00");
    this.evening   = new Date(today +  " 18:00:00");
    this.night     = new Date(today +  " 24:00:00");
    console.log(this.morning,this.afternoon);

   }
   ngOnChanges() {
    // IMPLEMENT ANYTHING YOU BEKIEVE YOU MIGHT NEED HERE
  }
  
}

 


