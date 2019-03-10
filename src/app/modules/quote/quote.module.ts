import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './components/quote/quote.component';
import { RoomComponent } from './components/room/room.component';
import { WindowComponent } from './components/window/window.component';
import { QuoteService } from './services/quote.service';
import { MatTableModule,MatSortModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
const routes: Routes = [
  { path: '', component: QuoteComponent },
  { path: 'room', component: RoomComponent },
  { path: 'window', component: WindowComponent }
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
    RoomComponent,
    WindowComponent
  ],
  providers:[
    QuoteService
  ]
})
export class QuoteModule { }

