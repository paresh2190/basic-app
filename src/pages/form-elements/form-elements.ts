import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarModule } from 'primeng/primeng';

@Component({
	selector: 'page-form-elements',
	templateUrl: 'form-elements.html',
})
export class FormElementsPage {
	[x: string]: any;

	myDate = new Date();
	dateSettings: any = {
		theme: 'material',
		display: 'bottom'
	};

	@ViewChild('mbscSelect') selectComp: any;
	@ViewChild('mbscAcSelect') selectAcComp: any;
	@ViewChild('mbscSingleSelect') singleSelectComp: any;
	@ViewChild('mbscMultiSelect') multiSelectComp: any;
	myCar = 3;
	singleSelectSettings = {
		theme: 'material',
		display: 'bottom',
		
		data: [{
			  text: 'Volvo',
			  value: 1
		  }, {
			  text: 'Saab',
			  value: 2
		  }, {
			  text: 'Mercedes',
			  value: 3
		  }, {
			  text: 'Audi',
			  value: 4
		  }, {
			  text: 'BMW',
			  value: 5
		  }, {
			  text: 'VW',
			  value: 6
		  }, {
			  text: 'Renault',
			  value: 7
		  }, {
			  text: 'Jaguar',
			  value: 8
		  }, {
			  text: 'Ferrari',
			  value: 9
		  }]
	  }
	
		/* multiple select demo settings */
	
	  myValues = [2, 5, 8];
	  multiSelectSettings ={
		theme: 'material',
		display: 'center',
		height: 50,
		inputClass: 'text-input',
		showOnFocus: true,
		focusOnClose: false,
		width: 300,
		data: [{
			  text: 'Books',
			  value: 1
		  }, {
			  text: 'Movies, Music & Games',
			  value: 2
		  }, {
			  text: 'Electronics & Computer',
			  value: 3
		  }, {
			  text: 'Home, Garden & Tools',
			  value: 4
		  }, {
			  text: 'Health & Beauty',
			  value: 5
		  }, {
			  text: 'Toys, Kids & Baby',
			  value: 6
		  }, {
			  text: 'Clothing & Jewelry',
			  value: 7
		  }, {
			  text: 'Sports & Outdoors',
			  value: 8
		  }, {
			  text: 'Automotive & Industrial',
			  value: 9
		  }],
		  select: 'multiple'
	  }
	
		/* group select demo settings */
	
	  myValue = '3';
	  selectSettings = {
		  theme: 'material',
		  display: 'bottom',
		  inputClass: 'text-input',
		  showOnFocus: true,
		  group: true,

		  data: [{
				text: 'Berlin',
				value: '1',
				group: 'Europe'
			}, {
				text: 'Paris',
				value: '2',
				group: 'Europe'
			}, {
				text: 'London',
				value: '3',
				group: 'Europe'
			}, {
				text: 'Amsterdam',
				value: '4',
				group: 'Europe'
			}, {
				text: 'Peking',
				value: '5',
				group: 'Asia'
			}, {
				text: 'Tokyo',
				value: '6',
				group: 'Asia'
			}, {
				text: 'Ulan Bator',
				value: '7',
				group: 'Asia'
			}, {
				text: 'New York',
				value: '8',
				group: 'America'
			}, {
				text: 'Miami',
				value: '9',
				group: 'America'
			}, {
				text: 'Michigan',
				value: '10',
				group: 'America'
			}]
	  };
	
		/* autocomplete select demo settings */
	
	  selectAcSettings = {
		theme: 'material',
		 multiline: 2,
		 height: 50,
		 inputClass: 'text-input',
		 showOnFocus: true,
		 focusOnClose: false,
		 display: 'center',
		 data: {
			 url: 'https://trial.mobiscroll.com/airports/',
			 remoteFilter: true,
			 dataType: 'jsonp',
			 processResponse: function (data) {
				 var i,
					 item,
					 ret = [];
	
				 if (data) {
					 for (i = 0; i < data.length; i++) {
						 item = data[i];
						 ret.push({
							 value: item.code,
							 text: item.name,
							 html: '<div style="font-size:16px;line-height:18px;">' + item.name + '</div><div style="font-size:10px;line-height:12px;">' + item.location + ', ' + item.code + '</div>'
						 });
					 }
				 }
	
				 return ret;
			 }
		 },
		 filter: true,
		 placeholder: 'Please select'
	  };

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FormElementsPage');
	}

}
