import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GoogleMaps} from '@ionic-native/google-maps';
/* primeng */
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { MenuItem } from 'primeng/primeng';  
/* mobiscroll */
import { MbscModule, mobiscroll } from '../assets/lib/mobiscroll/js/mobiscroll.custom-4.0.0-beta2.min.js';
/* mobiscroll */
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ChartsModule } from 'ng2-charts';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CommonPage } from '../providers/common-funtions';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AccordianListPage } from '../pages/accordian-list/accordian-list';
import { FormElementsPage } from '../pages/form-elements/form-elements';
import { ModalPopupPage } from '../pages/modal-popup/modal-popup';
import { SwipeTabsPage } from '../pages/swipe-tabs/swipe-tabs';
import { ParentTabPage } from '../pages/super-tabs/parent-tab/parent-tab';
import { Tab_1Page } from '../pages/super-tabs/tab-1/tab-1';
import { Tab_2Page } from '../pages/super-tabs/tab-2/tab-2';
import { PopupPage } from '../pages/popup/popup';
import { LoginPage } from '../pages/login/login';
import { ZingChartPage } from '../pages/zing-chart/zing-chart';
import { MapPage } from '../pages/map/map';
import { AnimationPage } from '../pages/animation/animation';
import { ZoomImgPage } from '../pages/zoom-img/zoom-img';
import { PieChartPage } from '../pages/pie-chart/pie-chart';
import { CongratsPage } from '../pages/congrats/congrats';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccordianListPage,
    FormElementsPage,
    ModalPopupPage,
    SwipeTabsPage,
    ParentTabPage,
    Tab_1Page,
    Tab_2Page,
    PopupPage,
    LoginPage,
    ZingChartPage,
    MapPage,
    AnimationPage,
    ZoomImgPage,
    PieChartPage,
    CongratsPage
    
  ],
  imports: [ 
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    BrowserAnimationsModule,
    AccordionModule,
    MbscModule,
    IonicImageViewerModule,
    ChartsModule,
    NgxChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccordianListPage,
    FormElementsPage,
    ModalPopupPage,
    SwipeTabsPage,
    ParentTabPage,
    Tab_1Page,
    Tab_2Page,
    PopupPage,
    LoginPage,
    ZingChartPage,
    MapPage,
    AnimationPage,
    ZoomImgPage,
    PieChartPage,
    CongratsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CommonPage,
    GoogleMaps,
    NativePageTransitions,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
export { mobiscroll }


