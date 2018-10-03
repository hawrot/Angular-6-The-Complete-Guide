import { Component, OnInit } from '@angular/core';
import {ifTrue} from "codelyzer/util/function";

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

  username = '';
  allowUsername = false;
  userCreationStatus = 'user not created';

  constructor() {

  }

  ngOnInit() {
  }


  onAddUsername(){
    this.userCreationStatus = 'user was created! Name is: ' + this.username ;

  }

}
