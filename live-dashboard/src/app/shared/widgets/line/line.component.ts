import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  chartOptions: {};
  chartOptions1: {};
  chartOptions2: {};

  Highcharts = Highcharts;
  constructor() { }

  

  ngOnInit() {
    this.chartOptions = {

    title: {
        text: 'Some Power graph'
    },

    credits: {
      enabled: false,
    },

    exporting: {
      enabled: true
    },

    series: [{
        data: [98, 90, 96, 91, 93]
    }],
  };

  this.chartOptions1 = {

    title: {
        text: 'Some Power Factor graph'
    },

    credits: {
      enabled: false,
    },

    exporting: {
      enabled: true
    },

    // chart: {
    //   events: {
    //     load: function() {
    //       var series = this.series[0];
    //       setInterval(function() {
    //         series.addPoint(Math.random() * 10, true, true);
    //       }, 1000);
    //     }
    //   }
    // },
  
    series: [{
      data: [4, 3, 5, 6]
    }]

    // series: [{
    //     data: [71, 54, 92, 48, 88, 61]
    // }],
  };

//   this.chartOptions2 = {
//     chart: {
//         events: {
//             load: function () {

//                 // set up the updating of the chart each second
//                 var series = this.series[0];
//                 setInterval(function () {
//                     var x = (new Date()).getTime(), // current time
//                         y = Math.round(Math.random() * 100);
//                     series.addPoint([x, y], true, true);
//                 }, 1000);
//             }
//         }
//     },

//     time: {
//         useUTC: false
//     },

//     rangeSelector: {
//         buttons: [{
//             count: 1,
//             type: 'minute',
//             text: '1M'
//         }, {
//             count: 5,
//             type: 'minute',
//             text: '5M'
//         }, {
//             type: 'all',
//             text: 'All'
//         }],
//         inputEnabled: false,
//         selected: 0
//     },

//     title: {
//         text: 'Live random data'
//     },

//     exporting: {
//         enabled: false
//     },

//     series: [{
//         name: 'Random data',
//         data: (function () {
//             // generate an array of random data
//             var data = [],
//                 time = (new Date()).getTime(),
//                 i;

//             for (i = -999; i <= 0; i += 1) {
//                 data.push([
//                     time + i * 1000,
//                     Math.round(Math.random() * 100)
//                 ]);
//             }
//             return data;
//         }())
//     }]
// };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
    
  
  
  }

}


