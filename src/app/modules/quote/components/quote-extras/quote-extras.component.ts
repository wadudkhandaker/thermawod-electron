import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quote-extras',
  templateUrl:'./quote-extras.component.html', 
  styleUrls: ['./quote-extras.component.scss']
})
export class QuoteExtrasComponent implements OnInit {
  isAddClick:boolean;
  price:0;
  quantity:'';
  comment:'';
  windows:object[]=[{
    name:'',
    drawingType:''
  }];
  constructor(private router:Router) {

  }
  ngOnInit(){
    
  }
 goBack(){
  // this.router.navigate(['/room']);
  window.history.back();
 }
 onRowSelect(row){
  console.log(row);
 }
 addQuoteExtra(){
    this.isAddClick =true;
 }
 goToQuotePricing(){
  this.router.navigate(['/quote-pricing']);
 }
}
