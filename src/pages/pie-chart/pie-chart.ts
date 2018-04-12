import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pie-chart',
  templateUrl: 'pie-chart.html',
})
export class PieChartPage {
 
  // d3 chart

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showLegend = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#333333']
  };

  // pie
  showLabels = true;
  explodeSlices = true;
  doughnut = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var single = [
        {
          name: 'Germany',
          value: 8940000,
        },
        {
          name: 'USA',
          value: 5000000,
        },
        {
          name: 'France',
          value: 7200000,
        },
        {
            name: 'Italy',
            value: 7200000,
        }
      ];
      
      var multi = [
        {
          name: 'Germany',
          series: [
            {
              name: '2010',
              value: 7300000,
            },
            {
              name: '2011',
              value: 8940000,
            },
          ],
        },
      
        {
          name: 'USA',
          series: [
            {
              name: '2010',
              value: 7870000,
            },
            {
              name: '2011',
              value: 8270000,
            },
          ],
        },
      
        {
          name: 'France',
          series: [
            {
              name: '2010',
              value: 5000002,
            },
            {
              name: '2011',
              value: 5800000,
            },
          ],
        },
      ];
      Object.assign(this, {single, multi});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PieChartPage');
  }
  // public polarAreaChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  // public polarAreaChartData:number[] = [300, 500, 100, 40, 120];
  // public polarAreaLegend:boolean = true;
 
  // public polarAreaChartType:string = 'polarArea';
 
  // // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }
 
  // public chartHovered(e:any):void {
  //   console.log(e);
  // }
  

}
