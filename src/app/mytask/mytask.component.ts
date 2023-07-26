import { Component,OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-mytask',
  templateUrl: './mytask.component.html',
  styleUrls: ['./mytask.component.css']
})
export class MytaskComponent implements OnInit{
list:any;
constructor(private service : MyserviceService){}
  ngOnInit() {
    this.getdatas()
  }
getdatas(){
  this.service.getdata().subscribe((res)=>{
    this.list=res
  })
}

}



export  class list{
  title:any;
  completed:any;
  tags:any
  }