import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';


@Component({
  selector: 'page-popup',
  templateUrl: 'popup.html',
})
export class PopupPage {
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopupPage');
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }

}
