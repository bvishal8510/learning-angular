import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // selector: '#app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  createserverstatus = 'No server created';
  servername = 'test';
  servercreated = false;
  servers = ['testserver1','testserver2']

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onservercreation(){
    this.servercreated = true;
    this.servers.push(this.servername);
    this.createserverstatus = 'Server was created with name ' + this.servername; 
  }

  createserver(event: any){
    this.servername = event.target.value;
  }
}
