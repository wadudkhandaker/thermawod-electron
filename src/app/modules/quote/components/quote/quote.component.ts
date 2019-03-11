import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';
export interface PeriodicElement {
  quote: number,
  position: number,
  lead:number,
  name: string,
  lastName: string,
  address: string,
  phoneNumber: number,
  email: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, quote: 543, lead: 19,name:'John', lastName: 'Test Auckland',address:'',phoneNumber:6456,email:'john.gmail.com'},
  {position: 2, quote: 345, lead: 0, name:'Copper',lastName: 'Gemmel',address:'56 Roberta Crescent',phoneNumber:6456,email:'copper.gmail.com'},
  {position: 3, quote: 43545, lead: 6941, name:'JAN',lastName: 'Showers',address:'',phoneNumber:6456,email:'jan.gmail.com'},
  {position: 4, quote: 3452, lead: 9122, name:'Kest',lastName: 'Test',address:'',phoneNumber:76657,email:'kest.gmail.com'},
  {position: 5, quote: 657, lead: 111,name:'April', lastName: 'Showers',address:'',phoneNumber:5674576456,email:'april.gmail.com'},
  {position: 6, quote: 5606, lead: 1107, name:'Vicky',lastName: 'Copper Chest Test',address:'',phoneNumber:346436,email:'vicky.gmail.com'},
  {position: 7, quote: 568, lead: 167, name:'Mark',lastName: 'Zopper Chest Test',address:'',phoneNumber:352535,email:'mark.gmail.com'},
  {position: 8, quote: 367, lead: 194,name:'Yiffen', lastName: 'Zing',address:'3 Gateman Street',phoneNumber:7547457,email:'yiffen.gmail.com'},
  {position: 9, quote: 567, lead: 184, name:'STUART',lastName: 'ABC',address:'',phoneNumber:3253466456,email:'stuart.gmail.com'},
  {position: 10, quote: 2346, lead: 297, name:'Lindsey',lastName: 'BCD',address:'',phoneNumber:756765,email:'lindsey.gmail.com'},
];
@Component({
  selector: 'app-quote',
  templateUrl:'./quote.component.html', 
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  displayedColumns: string[] = ['quote', 'lead', 'name', 'lastName','address','phoneNumber','email'];
  isSelectedRow:boolean;
  selectedRowIndex:number;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  constructor(private router:Router) {
    this.dataSource.sort = this.sort;
  }
 ngOnInit(){}
 onRowSelect(row){
  this.isSelectedRow=true;
  this.selectedRowIndex = row.position;
 }
 roomEdit(){
  this.router.navigate(['/customer-details']);
 }
}
