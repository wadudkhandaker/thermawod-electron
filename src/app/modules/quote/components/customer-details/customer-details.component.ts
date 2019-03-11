import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-customer-details',
  templateUrl:'./customer-details.component.html', 
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // firstName:'April';
  // email:'april.gmail.com';
  // phoneNumber:'5674576456';
  // lastName:'Showers';
  // companyNamr:'Company Name';
  // mobilePhoneNumber:'Mobile Phone Number';
  // addressLione1:'AddressLione 1';
  // addressLione2:'AddressLione 2';
  // suburb:'Suburb'; 
  // city:'City';
  // postCode:'Post Code';
  // addressLione3:'AddressLione 3';
  // addressLione4:'AddressLione 4';
  // suburb1:'Suburb'; 
  // city11:'City';
  // postCode1:'Post Code';
  @ViewChild(MatSort) sort: MatSort;
  constructor(private router:Router) {
    // this.dataSource.sort = this.sort;
    // this.firstName='April';
    // this.email='april.gmail.com';
    // this.phoneNumber='5674576456';
    // this.lastName ='Showers';
    // this.companyNamr='Company Name';
    // this.mobilePhoneNumber='Mobile Phone Number';
    // this.addressLione1='AddressLione 1';
    // this.addressLione2='AddressLione 2';
    // this.suburb='Suburb'; 
    // this.city='City';
    // this.postCode='Post Code';
    // this.addressLione3='AddressLione 3';
    // this.addressLione4='AddressLione 4';
    // this.suburb1='Suburb'; 
    // this.city11='City';
    // this.postCode1='Post Code';
  }
 ngOnInit(){}
 goToRoom(){
  this.router.navigate(['/room']);
 }
 goBack(){
  this.router.navigate(['/quote']);
 }
 onRowSelect(row){
  console.log(row);
 }
}
