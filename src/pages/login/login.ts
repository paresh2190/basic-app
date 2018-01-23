import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController, MenuController} from 'ionic-angular';
import { NgForm, NgModel, NgControl } from '@angular/forms';
import { CommonPage } from '../../providers/common-funtions';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  telNo: any;
  existNum = []
  @ViewChild('number') inputNumber: NgModel;
  constructor(public navCtrl: NavController, public navParams: NavParams, public commonPage: CommonPage, menu: MenuController) {
    menu.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    this.existNum[0]=9821301169;
    this.existNum[1]=1111111111;
    
    
    var getNo = this.existNum.indexOf(parseInt(this.telNo));
    console.log(getNo)
    if(getNo > -1){  
      console.log('successful', this.telNo);
      this.navCtrl.setRoot(HomePage);
      localStorage.setItem('user', this.telNo)
    }
    else{
      console.log('failed');
      this.commonPage.showAlert('Oops!','', 'Please enter valid number', 'Ok');
    }
  }
}
