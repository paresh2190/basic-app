import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var zingchart: any;
@Component({
  selector: 'page-zing-chart',
  templateUrl: 'zing-chart.html',
})
export class ZingChartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZingChartPage');
    setTimeout(() => {
      this.gauge();
      this.donutChart1();
      this.donutChart2();
      this.pieChart();
    },500)
  }

  gauge() {
    let myConfig16 = {
      "type": "gauge",
      "scale-r": {
        "aperture": 200,
        "values": "0:100:20",
        "center": {
          "size": 5,
          "background-color": "#66CCFF #FFCCFF",
          "border-color": "none"
        },
        "ring": {
          "size": 10,
          "rules": [{
            "rule": "%v >= 0 && %v <= 20",
            "background-color": "red"
          }, {
            "rule": "%v >= 20 && %v <= 40",
            "background-color": "orange"
          }, {
            "rule": "%v >= 40 && %v <= 60",
            "background-color": "yellow"
          }, {
            "rule": "%v >= 60 && %v <= 80",
            "background-color": "green"
          }, {
            "rule": "%v >= 80 && %v <=100",
            "background-color": "blue"
          }]
        },
        "guide": {
          "background-color": "#66CCFF #FFCCFF",
          "alpha": 0.2
        },
        "tick": {
          "line-color": "#66CCFF",
          "line-style": "solid",
          "line-width": 3,
          "size": 15,
          "placement": "inner"
        },
        "minor-ticks": 4,
        "minor-tick": {
          "line-color": "#FFFFFF",
          "line-style": "solid",
          "line-width": 2,
          "size": 10,
          "placement": "inner"
        }
      },
      "plot": {
        "csize": "5%",
        "size": "100%",
        "background-color": "#000000",
        "animation":{ //Animation object
          "effect":2,
          "method":4,
          "sequence":1,
          "speed":10000
        }
      },
      "tooltip": {
        "text": "%t - %v%",
        "font-color": "black",
        "font-family": "Georgia",
        "background-color": "white",
        "alpha": 0.7,
        "border-color": "none"
      },
      "series": [{
        "values": [87],
        "text": "Very Great!"
      }]
    };

    zingchart.render({
      id: 'gauge',
      data: myConfig16,
      height: "100%",
      width: "100%"
    });
  }

  donutChart1() {
    var myConfig = {
      backgroundColor:'transparent',
         type: "ring",
        //  title: {
        //    text: "Monthly Page Views",
        //    fontFamily: 'Lato',
        //    fontSize: 14,
        //    // border: "1px solid black",
        //    padding: "15",
        //    fontColor : "#1E5D9E",
        //  },
        //  subtitle: {
        //    text: "06/10/16 - 07/11/16",
        //    fontFamily: 'Lato',
        //    fontSize: 12,
        //    fontColor: "#777",
        //    padding: "5"
        //  },
         plot: {
           slice:'50%',
           borderWidth:0,
           backgroundColor:'#FBFCFE',
           animation:{
             effect:2,
             sequence:3
           },
           valueBox: [
             {
               type: 'all',
               text: '%t',
               placement: 'out'
             }, 
             {
               type: 'all',
               text: '%npv%',
               placement: 'in'
             }
           ]
         },
        tooltip:{
             fontSize:12,
             anchor:'c',
             x:'50%',
             y:'50%',
             sticky:true,
             backgroundColor:'none',
             borderWidth:0,
             thousandsSeparator:',',
             text:'<span style="color:%color">Page Url: %t</span><br><span style="color:%color">Pageviews: %v</span>',
            mediaRules:[
              {
                  maxWidth:500,
                   y:'54%',
              }
            ]
        },
         plotarea: {
           backgroundColor: 'transparent',
           borderWidth: 0,
           borderRadius: "0 0 0 10",
           margin: "70 0 10 0"
         },
         legend : {
          toggleAction:'remove',
          backgroundColor:'#FBFCFE',
          borderWidth:0,
          adjustLayout:true,
          align:'center',
          verticalAlign:'bottom',
          marker: {
              type:'circle',
              cursor:'pointer',
              borderWidth:0,
              size:5
          },
          item: {
              fontColor: "#777",
              cursor:'pointer',
              offsetX:-6,
              fontSize:12
          },
          mediaRules:[
              {
                  maxWidth:500,
                  visible:false
              }
          ]
         },
         scaleR:{
           refAngle:270
         },
        series : [
          {
            text: "Docs",
            values : [106541],
            lineColor: "#00BAF2",
            backgroundColor: "#00BAF2",
            lineWidth: 1,
            marker: {
              backgroundColor: '#00BAF2'
            }
          },
          {
            text: "Gallery",
            values : [56711],
            lineColor: "#E80C60",
            backgroundColor: "#E80C60",
            lineWidth: 1,
            marker: {
              backgroundColor: '#E80C60'
            }
          },
          {
            text: "Index",
            values : [43781],
            lineColor: "#9B26AF",
            backgroundColor: "#9B26AF",
            lineWidth: 1,
            marker: {
              backgroundColor: '#9B26AF'
            }
          }
        ]
      };
       
      zingchart.render({ 
        id : 'donutChart1', 
        data: {
          gui:{
            contextMenu:{
              button:{
                visible: true,
                lineColor: "#2D66A4",
                backgroundColor: "#2D66A4"
              },
              gear: {
                alpha: 1,
                backgroundColor: "#2D66A4"
              },
              position: "right",
              backgroundColor:"#306EAA", /*sets background for entire contextMenu*/
              docked: true, 
              item:{
                backgroundColor:"#306EAA",
                borderColor:"#306EAA",
                borderWidth: 0,
                fontFamily: "Lato",
                color:"#fff"
              }
            
            },
          },
          graphset: [myConfig]
        },
        height: '100%', 
        width: '99%' 
      });
  }

  donutChart2() {
    var myConfig = {
      gui:{
        behaviors:[ //default contextMenu behaviors
            {
              id: "Reload", //built-in id
              enabled:"none" //sets visibility to show 
            },
            {
              id: "SaveAsImage",
              enabled:"none"
            },
            {
              id: "DownloadPDF", //built-in id
              enabled: "none" //sets visibility to show
            },
            {
              id: "DownloadSVG",
              enabled: "none"
            },
            {
              id: "Print", 
              enabled: "none"
            },
            {
              id: "ViewSource", //built-in id 
              enabled: "none" //sets visibility to hide
            },
            {
              id: "About ZingChart", //removed with licensing
              enabled: "none"
            }
          ] 
      },
      "type":"ring",
      // "title":{
      //   "text":"Donut Chart"
      // },
      "plot":{
        //Use the "slice" attribute to adjust the size of the donut ring.
        slice: "50%"
      },
      "series":[
        { "values": [59], "background-color": '#000000 #cc00ff'},
        {"values":[55]},
        {"values":[30]},
        {"values":[28]},
        {"values":[15]}
      ]
    };
     
    zingchart.render({ 
      id : 'donutChart2', 
      data : myConfig, 
      height: 300, 
      width: "100%" 
    });
  }

  pieChart() {
    var myConfig = {
      gui:{
        behaviors:[ //default contextMenu behaviors
            {
              id: "Reload", //built-in id
              enabled:"none" //sets visibility to show 
            },
            {
              id: "SaveAsImage",
              enabled:"none"
            },
            {
              id: "DownloadPDF", //built-in id
              enabled: "none" //sets visibility to show
            },
            {
              id: "DownloadSVG",
              enabled: "none"
            },
            {
              id: "Print", 
              enabled: "none"
            },
            {
              id: "ViewSource", //built-in id 
              enabled: "none" //sets visibility to hide
            },
            {
              id: "About ZingChart", //removed with licensing
              enabled: "none"
            }
          ] 
      },
      "type":"pie",
      // "title":{
      //   "text":"'ref-angle' attribute"
      // },
      "scale-r":{
        "ref-angle":270 //relative to starting 90 degree position
      },
      "plot":{
        "value-box":{
          "visible":false
        }
      },
      "series":[
        {"values":[59]},
        {"values":[55]},
        {"values":[30]},
        {"values":[28]},
        {"values":[15]}
      ]
    };
     
    zingchart.render({ 
      id : 'pieChart', 
      data : myConfig, 
      height: 300, 
      width: "100%" 
    });
  }
}
