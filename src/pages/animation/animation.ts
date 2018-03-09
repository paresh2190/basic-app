import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { ModalPopupPage } from '../modal-popup/modal-popup';
import "gsap";
declare var TweenMax;


@Component({
  selector: 'page-animation',
  templateUrl: 'animation.html',
})
export class AnimationPage {
  @ViewChild('btn1') btn1;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimationPage');
    TweenMax.to(this.btn1, 1, {opacity:0, onComplete: this.call});
    console.log('working');
    console.log(this.btn1);
  }
  slidePage() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
     };
 
    this.nativePageTransitions.slide(options);
    this.navCtrl.setRoot(ModalPopupPage);
  }
 
  flipPage() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
     };
 
    this.nativePageTransitions.flip(options);
    this.navCtrl.push(ModalPopupPage);
  }
 
  fadePage() {
    this.nativePageTransitions.fade(null);
    this.navCtrl.setRoot(ModalPopupPage);
  }
 
  curlPage() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
     };
    this.nativePageTransitions.curl(options);
    this.navCtrl.setRoot(ModalPopupPage);
  }
  ngOnInit() {
    
        
  }
  call(){
    console.log('animate');
  }

}
