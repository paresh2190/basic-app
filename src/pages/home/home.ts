import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  setClass : any;
  constructor(public navCtrl: NavController, menu: MenuController) {
    menu.enable(true);
  }
  
  fontSet(changeClass){
    this.setClass = changeClass
  }
 
}
