import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';
export interface Transaction {
  rooms:string,
  numberOfUnits:number,
  optionOne:number,
  optionTwo:number,
  optionThree:number,
  optionFour:number
}
@Component({
  selector: 'app-quote-pricing',
  templateUrl:'./quote-pricing.component.html', 
  styleUrls: ['./quote-pricing.component.scss']
})
export class QuotePricingComponent implements OnInit {
  displayedColumns: string[] = ['rooms', 'numberOfUnits','optionOne','optionTwo','optionThree','optionFour'];
  transactions: Transaction[] = [
    {rooms: 'Lounge',
    numberOfUnits:3,
    optionOne:851.00,
    optionTwo:940.00,
    optionThree:960.00,
    optionFour:970},
    {rooms: 'Lounge',
    numberOfUnits:2,
    optionOne:1000.00,
    optionTwo:1050.00,
    optionThree:1100.00,
    optionFour:1150},
    {rooms: 'Lounge',
    numberOfUnits:2,
    optionOne:1050.00,
    optionTwo:1100.00,
    optionThree:1150.00,
    optionFour:1200},
    {rooms: 'Lounge',
    numberOfUnits:4,
    optionOne:1180.00,
    optionTwo:1200.00,
    optionThree:1250.00,
    optionFour:1270},
    {rooms: 'Lounge',
    numberOfUnits:6,
    optionOne:1250.00,
    optionTwo:1290.00,
    optionThree:1320.00,
    optionFour:1370},
    {rooms: 'Lounge',
    numberOfUnits:1,
    optionOne:1400.00,
    optionTwo:1430.00,
    optionThree:1480.00,
    optionFour:1500},
    {rooms: 'Lounge',
    numberOfUnits:2,
    optionOne:1500.00,
    optionTwo:1600.00,
    optionThree:1650.00,
    optionFour:1670},
    {rooms: 'Lounge',
    numberOfUnits:5,
    optionOne:1200.00,
    optionTwo:1250.00,
    optionThree:1300.00,
    optionFour:1400}
  ];
  constructor(private router:Router) {
  }
 ngOnInit(){}
 getTotalUnitCost() {
  return this.transactions.map(t => t.numberOfUnits).reduce((acc, value) => acc + value, 0);
 }
 getTotalOptionOneCost() {
  return this.transactions.map(t => t.optionOne).reduce((acc, value) => acc + value, 0);
 }
 getTotalOptionTwoCost() {
  return this.transactions.map(t => t.optionTwo).reduce((acc, value) => acc + value, 0);
 }
 getTotalOptionThreeCost() {
  return this.transactions.map(t => t.optionThree).reduce((acc, value) => acc + value, 0);
 }
 getTotalOptionFourCost() {
  return this.transactions.map(t => t.optionFour).reduce((acc, value) => acc + value, 0);
 }
 onRowSelect(row){
  this.router.navigate(['/customer-details']);
 }
}
