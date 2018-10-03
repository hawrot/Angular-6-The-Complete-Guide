import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: ['.online {color: white; color: white;}']

})

export class ServerComponent {
  serverId = 10;
  serverStatus: string = 'offline'; //assigned the type

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}

