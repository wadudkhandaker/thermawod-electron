import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './components/quote.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule
  ],
  declarations: [
    QuoteComponent
  ]
})
export class QuoteModule { }

