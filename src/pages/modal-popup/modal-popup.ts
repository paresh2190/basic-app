import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { PopupPage } from '../popup/popup';
import { AnimationPage } from '../animation/animation';

@Component({
  selector: 'page-modal-popup',
  templateUrl: 'modal-popup.html',
})
export class ModalPopupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPopupPage');
  }
  openModal() {
    console.log('test');
    let myModal = this.modalCtrl.create(PopupPage);
    myModal.present();
  }
  goBack() {
    if (this.navCtrl.canGoBack()) {
      let options: NativeTransitionOptions = {
        direction: 'down',
        duration: 500,
        slowdownfactor: -1,
        slidePixels: 20,
      };
 
      this.nativePageTransitions.slide(options);
      this.navCtrl.pop();
    } else {
      let options: NativeTransitionOptions = {
        duration: 700
      };
      this.nativePageTransitions.fade(options);
      this.navCtrl.setRoot(AnimationPage);
    }
  }

}
