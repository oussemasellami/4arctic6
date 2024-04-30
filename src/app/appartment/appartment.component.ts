import { Component, OnInit } from '@angular/core';
import { AppartmentService } from '../service/appartment.service';
import { Apartment } from '../models/apartment';

@Component({
  selector: 'app-appartment',
  templateUrl: './appartment.component.html',
  styleUrls: ['./appartment.component.css']
})
export class AppartmentComponent implements OnInit {

listappart:Apartment[]=[]
  constructor(private appartmetservice:AppartmentService){

  }
  ngOnInit(): void {
      this.appartmetservice.getappart().subscribe((data:Apartment[])=>{
this.listappart=data
console.log(JSON.stringify(this.listappart))
      })
  }
  deleteAppart(id:number){
    this.appartmetservice.deleteappart(id).subscribe(()=>{
      console.log(" deleted")
      window.location.reload()
    })
  }

  update(){
    
  }
}
