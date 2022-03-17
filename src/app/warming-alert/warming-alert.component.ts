import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-warming-alert]',
  templateUrl: './warming-alert.component.html',
  styles: [`
    p{
padding: 20px;
background-color: mistyrose;
border: 1px solid red;
    }
 ` ]
})
export class WarmingAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
