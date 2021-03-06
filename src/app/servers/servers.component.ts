import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers], .app-servers',
  selector: 'app-servers',
  //template: `
  //<app-server></app-server>
 // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent  {
  
  allowNewServer : boolean = false;
  serverCreationStatus : string = "No server was created!";
  serverName : string ='TestServer';

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true},2000);
  }
 
  onCreateServer(){
    this.serverCreationStatus ="Server was created! Name is " + this.serverName;
  }
  /*onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }*/
}
