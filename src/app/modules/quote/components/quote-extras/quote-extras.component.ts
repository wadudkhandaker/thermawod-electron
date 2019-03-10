import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quote-extras',
  templateUrl:'./quote-extras.component.html', 
  styleUrls: ['./quote-extras.component.scss']
})
export class QuoteExtrasComponent implements OnInit {
  isAddClick:boolean;
  windows:object[]=[{
    name:'',
    drawingType:''
  }];
  constructor(private router:Router) {

  }
  ngOnInit(){
    
  }
 goBack(){
  this.router.navigate(['/room']);
 }
 onRowSelect(row){
  console.log(row);
 }
 addWindow(){
    this.isAddClick =true;
 }
 goToQuoteExtras(){
  this.router.navigate(['/quote-extras']);
 }
}
