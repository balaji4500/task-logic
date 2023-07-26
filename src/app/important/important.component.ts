import { Component,OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-important',
  templateUrl: './important.component.html',
  styleUrls: ['./important.component.css']
})
export class ImportantComponent implements OnInit {
  importantdetails:any;

  constructor(private service:MyserviceService){}

  ngOnInit(){
  this.getdatas()
    
  }


  getdatas(){
    return this.service.getdata().subscribe((res)=>{
  this.importantdetails=res;
  
  })
  }


}


export class importantdetails{

title:any;
starred:any;

}