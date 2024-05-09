import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppartmentService } from '../service/appartment.service';
import { Apartment } from '../models/apartment';
import { Residence } from '../models/residence';

@Component({
  selector: 'app-appartment',
  templateUrl: './appartment.component.html',
  styleUrls: ['./appartment.component.css']
})
export class AppartmentComponent implements OnInit {

@Input()
var2:string=""
res:Residence= {
  "id": 1,
  "name": "El fel",
  "address": "Borj Cedria",
  "image": "../../assets/images/residence1.jpg"
}
@Input()app:Apartment={
  id: 2,
  appartNum:1,
  floorNum: 5,
  surface: 0,
  terrace: "",
  surfaceTerrace: 3,
  category: "",
  description: "",
  residence: this.res  
}
  variable1:string="hello 4 artic 6"
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

  @Output() valueEvent=new EventEmitter<string>()

  add(value:string){
console.log(value)
this.valueEvent.emit(value)
  }

  showViewChild(){
    console.log("hhhhhhhhhhhhhhhhhhhhhhhhh")
  }
}
