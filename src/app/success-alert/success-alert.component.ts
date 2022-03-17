import { Component, OnInit } from '@angular/core';
@Component({
    selector: '.app-success-alert',
    template: `
    <P>Success Alert Component</P>
    `,
    styleUrls:  ['./success-alert.component.css']
  })
  export class SuccessAlertComponent implements OnInit {
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }
  