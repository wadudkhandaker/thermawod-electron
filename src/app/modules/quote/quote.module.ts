import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './components/quote/quote.component';
import { RoomComponent } from './components/room/room.component';
import { WindowComponent } from './components/window/window.component';
import { QuoteService } from './services/quote.service';
// import { MatTableModule,MatSortModule,MatFormFieldModule,MatSelectModule } from '@angular/material';
import {MaterialModule} from '../../material.module';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', component: QuoteComponent },
  { path: 'room', component: RoomComponent },
  { path: 'window/:roomId', component: WindowComponent }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
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

