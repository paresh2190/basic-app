import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AccordianListPage } from '../pages/accordian-list/accordian-list';
import { FormElementsPage } from '../pages/form-elements/form-elements';
import { ModalPopupPage } from '../pages/modal-popup/modal-popup';
import { SwipeTabsPage } from '../pages/swipe-tabs/swipe-tabs';
import { ParentTabPage } from '../pages/super-tabs/parent-tab/parent-tab';
import { LoginPage } from '../pages/login/login';
import { ZingChartPage } from '../pages/zing-chart/zing-chart';
import { MapPage } from '../pages/map/map';
import { AnimationPage } from '../pages/animation/animation';
import { ZoomImgPage } from '../pages/zoom-img/zoom-img';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  
  

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    let aKey = localStorage.getItem('user');

    if(aKey=="9821301169"){
      this.rootPage = HomePage
    }
    else{
      this.rootPage = LoginPage
    }



    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Super Tabs', component: ParentTabPage },
      { title: 'Swipe Tabs', component: SwipeTabsPage },
      { title: 'Accordion PrimeNg', component: AccordianListPage },
      { title: 'Form', component: FormElementsPage },
      { title: 'Modal Popup', component: ModalPopupPage },
      { title: 'Gauge', component: ZingChartPage },
      { title: 'Map', component: MapPage },
      { title: 'Animation', component: AnimationPage },
      { title: 'Zoom Image', component: ZoomImgPage }
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  logOut(){
    localStorage.clear();
    console.log('clear log');
    this.nav.setRoot(LoginPage);
  }
}
