import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { MenuItem } from 'primeng/primeng';  



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AccordianListPage } from '../pages/accordian-list/accordian-list';
import { FormElementsPage } from '../pages/form-elements/form-elements';
import { ModalPopupPage } from '../pages/modal-popup/modal-popup';
import { SwipeTabsPage } from '../pages/swipe-tabs/swipe-tabs';
import { ParentTabPage } from '../pages/super-tabs/parent-tab/parent-tab';
import { Tab_1Page } from '../pages/super-tabs/tab-1/tab-1';
import { Tab_2Page } from '../pages/super-tabs/tab-2/tab-2';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    Tab_2Page
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    BrowserAnimationsModule,
    AccordionModule
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
    Tab_2Page
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
