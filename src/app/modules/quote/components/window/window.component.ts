import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SignatureFieldComponent } from '../signature-field/signature-field.component';
@Component({
  selector: 'app-window',
  templateUrl:'./window.component.html', 
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {
  isAddClick:boolean;
  showCreatedWindow:boolean;
  isRowClick:boolean;
  windows:object[]=[{
    name:'',
    drawingType:''
  }];
  windowName:''
  @ViewChild(SignatureFieldComponent) public signature: SignatureFieldComponent;
  @ViewChild('sigContainer') public signatureContainer: ElementRef;
  constructor(private router:Router) {

  }
 ngOnInit(){}
 public ngAfterViewInit() {
  this.beResponsive();
  this.setOptions();
}

// set the dimensions of the signature pad canvas
public beResponsive() {
  this.size(this.signatureContainer, this.signature);
}

public size(container: ElementRef, sig: SignatureFieldComponent) {
    sig.signaturePad.set('canvasWidth', 700);
    sig.signaturePad.set('canvasHeight', 250);
}

public setOptions() {
  this.signature.signaturePad.set('penColor', 'rgb(0, 0, 0)');
      this.signature.signaturePad.set('maxWidth', '3');
      this.signature.signaturePad.set('backgroundColor', 'rgb(255, 255, 255)');
      this.signature.signaturePad.clear(); // clearing is needed to set the background colour
}

public submit() {
  console.log('CAPTURED SIGS:');
}

public clear() {
  this.signature.clear();
}
 goBack(){
  this.router.navigate(['/room']);
 }
 onRowSelect(row){
  console.log(row);
 }
 addWindow(){
  this.showCreatedWindow =true;
  this.isRowClick =false;
    this.isAddClick =true;
 }
 goToQuoteExtras(){
  this.router.navigate(['/quote-extras']);
 }
}
