import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tab_1Page } from '../../super-tabs/tab-1/tab-1';
import { Tab_2Page } from '../../super-tabs/tab-2/tab-2';

/**
 * Generated class for the ParentTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-parent-tab',
  templateUrl: 'parent-tab.html',
})
export class ParentTabPage {
	page1: any = Tab_1Page;
	page2: any = Tab_2Page;
	

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentTabPage');
  }

}
