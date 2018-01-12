import { Component, ViewChild } from '@angular/core';

import { NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the SwipeTabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-swipe-tabs',
  templateUrl: 'swipe-tabs.html',
})
export class SwipeTabsPage {
  @ViewChild('pageSlider') pageSlider: Slides;
  tabs: any = '0';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  selectTab(index) {
    this.pageSlider.slideTo(index);
  }

  
  changeWillSlide($event) {
    this.tabs = $event._snapIndex.toString();
   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SwipeTabsPage');
  }

}
