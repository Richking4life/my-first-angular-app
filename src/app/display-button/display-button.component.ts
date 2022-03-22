import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-button',
  templateUrl: './display-button.component.html',
    styleUrls: ['./display-button.component.css']
  
})
export class DisplayButtonComponent  {
  display: boolean = false;
  isDisabled : boolean = false;
  log : Array<number> = [];
  paragraph : string = "Hide Details";


  constructor() { 
    setTimeout(()=>{
      this.isDisabled = true},2000);
  }
  
   onToggleDetails(): void{
    this.display = !this.display;
    if(this.display){
      this.paragraph="Show Details"  
      this.log.push(this.log.length +1);
    }else{
      this.paragraph="Hide Details"
    }
  }
}
