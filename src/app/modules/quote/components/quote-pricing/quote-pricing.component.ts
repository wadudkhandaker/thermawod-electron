import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatSort, MatTableDataSource, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig} from '@angular/material';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material';
export interface Transaction {
  rooms:string,
  numberOfUnits:number,
  optionOne:number,
  optionTwo:number,
  optionThree:number,
  optionFour:number,
  features:string,
}
@Component({
  selector: 'app-quote-pricing',
  templateUrl:'./quote-pricing.component.html', 
  styleUrls: ['./quote-pricing.component.scss']
})
export class QuotePricingComponent implements OnInit {
  displayedColumns: string[] = ['rooms', 'numberOfUnits','optionOne','optionTwo','optionThree','optionFour','features'];
  enableDiscount:boolean;
  discount:number;
  OptionOneCostWithDiscount:number;
  OptionTwoCostWithDiscount:number;
  OptionThreeCostWithDiscount:number;
  OptionFourCostWithDiscount:number;
  transactions: Transaction[] = [
    {rooms: 'Lounge',
    numberOfUnits:3,
    optionOne:851.00,
    optionTwo:940.00,
    optionThree:960.00,
    optionFour:970,features:'Laminate'},
    {rooms: 'Bedroom 1',
    numberOfUnits:2,
    optionOne:1000.00,
    optionTwo:1050.00,
    optionThree:1100.00,
    optionFour:1150,features:'Laminate'},
    {rooms: 'Bedroom 2',
    numberOfUnits:2,
    optionOne:1050.00,
    optionTwo:1100.00,
    optionThree:1150.00,
    optionFour:1200,features:'Laminate'},
    {rooms: 'Bedroom 3',
    numberOfUnits:4,
    optionOne:1180.00,
    optionTwo:1200.00,
    optionThree:1250.00,
    optionFour:1270,features:'Laminate'},
    {rooms: 'Toilet',
    numberOfUnits:6,
    optionOne:1250.00,
    optionTwo:1290.00,
    optionThree:1320.00,
    optionFour:1370,features:'Laminate'},
    {rooms: 'Laundry',
    numberOfUnits:1,
    optionOne:1400.00,
    optionTwo:1430.00,
    optionThree:1480.00,
    optionFour:1500,features:'Laminate'},
    {rooms: 'Bedroom 4',
    numberOfUnits:2,
    optionOne:1500.00,
    optionTwo:1600.00,
    optionThree:1650.00,
    optionFour:1670,features:'Laminate'},
    {rooms: 'Bedroom 5',
    numberOfUnits:5,
    optionOne:1200.00,
    optionTwo:1250.00,
    optionThree:1300.00,
    optionFour:1400,features:'Laminate'}
  ];
  constructor(private router:Router,public dialog: MatDialog) {
  }
 ngOnInit(){}
 goBack(){
  this.router.navigate(['/window']);
 }
 openDialog() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  
  dialogConfig.data = {
    id: 1,
    title: 'Angular For Beginners'
  };
  const dialogRef = this.dialog.open(DialogContentExampleDialog,dialogConfig);
  dialogRef.afterClosed().subscribe(result => {
    this.discount = result.event;
    this.enableDiscount = true;
    this.OptionOneCostWithDiscount = (this.getTotalOptionOneCost() * result.event)/100;
    this.OptionTwoCostWithDiscount = (this.getTotalOptionTwoCost() * result.event)/100;
    this.OptionThreeCostWithDiscount = (this.getTotalOptionThreeCost() * result.event)/100;
    this.OptionFourCostWithDiscount = (this.getTotalOptionFourCost() * result.event)/100;
  });
}
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
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogContentExampleDialog {
  discount: string;
  seasons: object[] = [
      {name:'No Discount',value:0}, 
      {name:'Staff (15%)',value:15}, 
      {name:'Friends and Family (12.5%)',value:12.5}, 
      {name:'Custom',value:0}
    ];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<DialogContentExampleDialog>
  ) { }
  save() {
    this.dialogRef.close({event:this.discount});
  }
  close() {
    this.dialogRef.close();
  }
  onInputChange(event){
    this.discount = event.value;
    console.log(event.value);
  }
}
