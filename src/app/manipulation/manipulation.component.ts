import { Component, OnInit, ViewChild } from '@angular/core';
import { AppartmentService } from '../service/appartment.service';
import { Apartment } from '../models/apartment';
import { AppartmentComponent } from '../appartment/appartment.component';

@Component({
  selector: 'app-manipulation',
  templateUrl: './manipulation.component.html',
  styleUrls: ['./manipulation.component.css']
})
export class ManipulationComponent implements OnInit{


  @ViewChild(AppartmentComponent)
  private appart:AppartmentComponent | undefined
  var1:string="salut 4arctic 6"
name=["ali", "ahmed"]
  shownom(nom:string){
    this.name.push(nom)

  }
  listappart:Apartment[]=[]
  constructor(private appartmetservice:AppartmentService){

  }
  ngOnInit(): void {
      this.appartmetservice.getappart().subscribe((data:Apartment[])=>{
this.listappart=data
console.log(JSON.stringify(this.listappart))
      })

      this.appart?.showViewChild
  }

}
