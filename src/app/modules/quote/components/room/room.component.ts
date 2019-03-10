import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-room',
  templateUrl:'./room.component.html', 
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  rooms:[{
    roomId:''
    roomName:'',
    windows:[{
      windowName:'';
      drawing:{
        type:'',
        image:'',
        marke:[]
      },
      windowMeasurements:[{
        DGU:'';
        height:'',
        width:'';
        type:'';
        thickness:'',
        toughening:'',
        obscurement:'',
        shape:'',
        dificulty:''
      }]
    }]
  }
    
  ]
  constructor() {

  }
 ngOnInit(){}
 addRoom(){

 }
}
