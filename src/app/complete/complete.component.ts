import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {
  list:any;
  completed=false;
  x:any
constructor(private service:MyserviceService) {}
ngOnInit() {
  this.getdatas()
}

getdatas(){
  return this.service.getdata().subscribe((res)=>{
this.list=res;

})
}




}



export  class list{
title:any;
completed:any;
first:any;
}


