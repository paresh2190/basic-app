import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarModule } from 'primeng/primeng';

@Component({
	selector: 'page-form-elements',
	templateUrl: 'form-elements.html',
})
export class FormElementsPage {
	
	myDate = new Date();
	dateSettings: any = {
        theme: 'material',
        display: 'bottom'
    };

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FormElementsPage');
	}

}
