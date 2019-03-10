import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './components/quote/quote.component';
import { RoomComponent } from './components/room/room.component';
import { WindowComponent } from './components/window/window.component';
import { QuoteService } from './services/quote.service';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { QuoteExtrasComponent } from './components/quote-extras/quote-extras.component';
import { QuotePricingComponent } from './components/quote-pricing/quote-pricing.component';
// import { MatTableModule,MatSortModule,MatFormFieldModule,MatSelectModule } from '@angular/material';
import {MaterialModule} from '../../material.module';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SignatureFieldComponent } from './components/signature-field/signature-field.component';
const routes: Routes = [
  { path: '', component: QuoteComponent },
  { path: 'room', component: RoomComponent },
  { path: 'customer-details', component: CustomerDetailsComponent },
  { path: 'quote-extras', component: QuoteExtrasComponent },
  { path: 'quote-pricing', component: QuotePricingComponent },
  { path: 'window/:roomId', component: WindowComponent }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    SignaturePadModule
  ],
  declarations: [
    QuoteComponent,
    RoomComponent,
    WindowComponent,
    CustomerDetailsComponent,
    SignatureFieldComponent,
    QuoteExtrasComponent,
    QuotePricingComponent
  ],
  providers:[
    QuoteService
  ]
})
export class QuoteModule { }

