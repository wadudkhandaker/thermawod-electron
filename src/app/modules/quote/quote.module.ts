import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './components/quote/quote.component';
import { RoomComponent } from './components/room/room.component';
import { MatTableModule,MatSortModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
const routes: Routes = [
  { path: '', component: QuoteComponent },
  { path: 'room', component: RoomComponent }
];
@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    RouterModule.forChild(routes),
    FlexLayoutModule
  ],
  declarations: [
    QuoteComponent,
    RoomComponent
  ]
})
export class QuoteModule { }

