import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl:'./quote.component.html', 
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  rows = [{
    "id": 0,
    "name": "Ramsey Cummings",
    "gender": "male",
    "age": 52,
    "address": {
        "state": "South Carolina",
        "city": "Glendale"
    }
},
{
    "id": 1,
    "name": "Stefanie Huff",
    "gender": "female",
    "age": 70,
    "address": {
        "state": "Arizona",
        "city": "Beaverdale"
    }
},
{
    "id": 2,
    "name": "Mabel David",
    "gender": "female",
    "age": 52,
    "address": {
        "state": "New Mexico",
        "city": "Grazierville"
    }
},
{
    "id": 3,
    "name": "Frank Bradford",
    "gender": "male",
    "age": 61,
    "address": {
        "state": "Wisconsin",
        "city": "Saranap"
    }
},
{
    "id": 4,
    "name": "Forbes Levine",
    "gender": "male",
    "age": 34,
    "address": {
        "state": "Vermont",
        "city": "Norris"
    }
}];
  constructor() {
    // this.fetch((data) => {
    //   this.rows = data;
    // });
  }
 ngOnInit(){}
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/100k.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
}
