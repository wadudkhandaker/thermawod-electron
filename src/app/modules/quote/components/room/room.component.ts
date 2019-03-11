import { Component, OnInit, ViewChild } from '@angular/core';
import { QuoteService} from '../../services/quote.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-room',
  templateUrl:'./room.component.html', 
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  isAddClick:boolean;
  newRoomName:'';
  newRoomComments:'';
  selectedRoomIndex:number;
  roomObj={};
  rooms: object[] = [{
    name:'',
    comments:''
  }];
  //   {
  //   roomId:''
  //   roomName:'',
  //   windows:[{
  //     windowName:'';
  //     drawing:{
  //       type:'',
  //       image:'',
  //       marke:[]
  //     },
  //     windowMeasurements:[{
  //       DGU:'';
  //       height:'',
  //       width:'';
  //       type:'';
  //       thickness:'',
  //       toughening:'',
  //       obscurement:'',
  //       shape:'',
  //       dificulty:''
  //     }]
  //   }]
  // } 

  constructor(private quoteService:QuoteService, private router:Router) {
  }
 ngOnInit(){}
 changedName(){
  this.rooms[this.rooms.length - 1]['name'] = this.newRoomName;
  this.rooms[this.rooms.length - 1]['comments'] = this.newRoomComments
 }
 selectRow(index:number){
  this.selectedRoomIndex = index;
  if( this.rooms.length>1){
    this.newRoomName = this.rooms[this.selectedRoomIndex]['name'];
    // this.newRoomComments = this.rooms[this.selectedRoomIndex]['comments']
  }
  
 }
 goBack(){
  this.router.navigate(['/customer-details']);
 }
 editRoom(){
  this.router.navigate(['/window']);
 }
 addRoom(){
   this.isAddClick = true;
   this.roomObj = {
    id:this.quoteService.getNewGuid(),
    name:this.newRoomName,
    comments:this.newRoomComments
  }
  if(this.newRoomName){
   this.rooms.push(this.roomObj);
   this.rooms[0]['name']= '';
   this.rooms[0]['comments']= '';
   this.rooms.unshift(this.rooms.pop())
   this.quoteService.setDataToStorage('rooms',this.rooms);
   
   this.newRoomName = '';
   this.newRoomComments= ''
  }
 }
}
