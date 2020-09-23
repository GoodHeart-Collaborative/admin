import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnChanges {
  circleChart: Chart;
  columnChart: Chart;
  areaChart: Chart;
  conversionRatioChart: Chart;
  GraphThisYear = [];
  GraphLastYear = [];
  sumGraphLastYear;

  constructor() { }
  chart: Chart;
  @Input() type = 1;
  @Input() userThisYear;
  @Input() userLastYear;
  @Input() monthlyEarning;
  @Input() subscriptionEarningMonthly;
  ngOnInit() {
    this.initAreaChart();
    this.initconversionRatioChart();
  }

  ngOnChanges() {
    if (this.userThisYear && this.userLastYear) {
      this.initColumnChart();
    }
    if (this.monthlyEarning) {
      this.initCircleChart();
    }
    if (this.subscriptionEarningMonthly) {
      this.initChart();
     }
   }


   initconversionRatioChart() {
  let  chart = new Chart(
    {
    chart: {
        type: 'column',
        width: 280,
        height: 200,
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['This month conversion ratio']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Converstion Ratio'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },
    series: [
      {
      name: 'John',
      type: 'column',
      color: 'pink',
      data: [40]
  },
  {
      name: 'shama',
      type: 'column',
      data: [10]
  }
]
   });
  this.conversionRatioChart = chart;

   }

  initChart() {
    let chart = new Chart(
      {
        chart: {
          type: 'spline',
          marginRight: 10,
          height: 280
        },
        colors: ['#FB56B2'],

        time: {
          useUTC: false
        },

        title: {
          text: ''
        },

        xAxis: {
          // type: 'datetime',
          // tickPixelInterval: 150
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ],
        },

        yAxis: {
          title: {
            text: 'Transaction'
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },

        tooltip: {
          headerFormat: '<b>{series.name}</b><br/>',
          // pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
        },

        legend: {
          enabled: false
        },

        exporting: {
          enabled: false
        },

        series: [{
          name: 'Transaction',
          type: 'spline',
          data: this.subscriptionEarningMonthly,
        }]
      }
    )
    this.chart = chart;
  }

  initCircleChart() {
    const circle = new Chart(
      {
        colors: ['#FB56B2', '#fdcb6e', '#67eaca', '#7b88ff', '#ff3e6d'],
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
          width: 300,
          height: 200,
          borderRadius: 10
        },
        title: {
          text: `£ ${this.monthlyEarning}`,
          align: 'center',
          verticalAlign: 'middle',
          y: 10,
          style: {
            fontFamily: 'Mukta-ExtraBold',
            color: '#515151',
            fontSize: '22px'
          }
        },
        plotOptions: {
          series: {
            cursor: 'pointer',
            allowPointSelect: false,
            dataLabels: {
              enabled: false,
            },
            enableMouseTracking: false
          }
        },
        credits: {
          enabled: false
        },
        tooltip: { pointFormat: '{point.name}: <b>{point.percentage}%</b>', enabled: false },
        series: [<any>{
          type: 'pie',
          name: 'Expense',
          colorByPoint: true,
          innerSize: '65%',
          data: [['Expense', 100]]
        }]
      }
    )
    this.circleChart = circle;
  }


  initColumnChart() {
    const column = new Chart(
      {
        colors: ['#FB56B2', '#2FD3CF'],
        chart: {
          type: 'column',
          height: 200,
          width: 440
        },
        title: {
          text: ''
        },
        // subtitle: {
        //   text: 'Source: WorldClimate.com'
        // },
        xAxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ],
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Users'
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [{
          name: 'This Year',
          data: this.userThisYear,
          type: 'column'

        }, {
          name: 'Last Year',
          data: this.userLastYear,
          type: 'column',
          colors: ['#FB56B2']


        }]
      }
    )
    this.columnChart = column;
  }

  initAreaChart() {
    const area = new Chart(
      {
        colors: ['#FB56B2'],

        chart: {
          type: 'area',
          height: 257,
        },
        title: {
          text: ''
        },
        // subtitle: {
        //   text: 'Source: Wikipedia.org'
        // },
        xAxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ],
          tickmarkPlacement: 'on',
          // title: {

          //   enabled: false
          // }
        },
        yAxis: {
          title: {
            text: 'Revenue'
          },

        },
        tooltip: {
          split: true,
          valueSuffix: ' millions'
        },
        plotOptions: {
          area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
              lineWidth: 1,
              lineColor: '#666666'
            }
          }
        },
        series: [{
          name: 'Revenue',
          data: [502, 635, 809, 947, 1402, 3634, 5268],
          type: 'area'
        }]
      }
    )
    this.areaChart = area;
  }
}
