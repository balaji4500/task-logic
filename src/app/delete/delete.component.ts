import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent  implements OnInit{

  deleteddetails:any;
  constructor(private service:MyserviceService) {}

ngOnInit() {
  this.getdatas()
  
}


getdatas(){
  return this.service.getdata().subscribe((res)=>{
this.deleteddetails=res;

})
}

}



export  class deleteddetails{
  title:any;
  deleted:any;
  }