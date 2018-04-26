import {Injectable} from '@angular/core';

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { NgForm, NgModel, NgControl } from '@angular/forms';

@Injectable()
export class CommonPage {
    constructor(public alertCtrl: AlertController) {
    }
    showAlert(title, subTitle, message, buttons, ){

        let alert = this.alertCtrl.create({
          title: title,
          subTitle: subTitle,
          message: message,
          buttons: [buttons]
        });
        alert.present();
    }
  
}
