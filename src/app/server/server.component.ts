import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .on{
        color: white;
    }
    `]
})
export class ServerComponent{
    serverId: number = 10;
    status: string = 'offline';

    constructor(){
        this.status = Math.random() > 0.5? 'online' : 'offline';
    }

    getstatus () {
        return this.status;
    }

    getcolor (){
        return this.status === 'offline'? 'red' : 'green';
    }
}