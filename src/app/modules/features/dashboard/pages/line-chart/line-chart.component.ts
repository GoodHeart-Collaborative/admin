import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  circleChart: Chart;
  columnChart: Chart;
  areaChart: Chart;

  constructor() { }
  chart: Chart;
  @Input() type = 1;
  ngOnInit() {
    this.initChart();
    this.initCircleChart();
    this.initColumnChart();
    this.initAreaChart();
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
          text: 'Total Transaction'
        },

        xAxis: {
          type: 'datetime',
          tickPixelInterval: 150
        },

        yAxis: {
          title: {
            text: 'Value'
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },

        tooltip: {
          headerFormat: '<b>{series.name}</b><br/>',
          pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
        },

        legend: {
          enabled: false
        },

        exporting: {
          enabled: false
        },

        series: [{
          name: 'Random data',
          type: 'spline',
          data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
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
          text: `£ ${100}`,
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


  initColumnChart(){
    const column = new Chart(
      {
        colors: ['#FB56B2', '#2FD3CF'],
        chart: {
          type: 'column',
          height: 200,
          width: 440
        },
        title: {
          text: 'User Statistics'
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
            text: 'Rainfall (mm)'
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
          name: 'Tokyo',
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
          type: 'column'

        }, {
          name: 'New York',
          data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
          type: 'column',
          colors: ['#FB56B2']


        }]
      }
    )
    this.columnChart = column;
  }

  initAreaChart(){
    const area = new Chart(
      {
        colors: ['#FB56B2'],

        chart: {
          type: 'area',
          height: 257,
        },
        title: {
          text: "Today's Revenue"
        },
        // subtitle: {
        //   text: 'Source: Wikipedia.org'
        // },
        xAxis: {
          categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
          tickmarkPlacement: 'on',
          // title: {

          //   enabled: false
          // }
        },
        yAxis: {
          title: {
            text: 'Billions'
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
          name: 'Asia',
          data: [502, 635, 809, 947, 1402, 3634, 5268],
          type: 'area'
        }]
      }
    )
    this.areaChart = area;
  }
}
