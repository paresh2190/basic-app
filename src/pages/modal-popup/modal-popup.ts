import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PopupPage } from '../popup/popup';

@Component({
  selector: 'page-modal-popup',
  templateUrl: 'modal-popup.html',
})
export class ModalPopupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPopupPage');
  }
  openModal() {
    console.log('test');
    let myModal = this.modalCtrl.create(PopupPage);
    myModal.present();
  }
  

}
