import {Component} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import {Chart, ChartOptions} from 'chart.js';
import chartTrendline from 'chartjs-plugin-trendline';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chartjs-trendline';

  protected data = () => {
    const newVar = {
      datasets: [{
        trendlineLinear: {
          width: 1,
          lineStyle: 'solid',
          colorMin: '#555555',
          colorMax: '#555555',
          projection: true
        },
        backgroundColor: '#a51212',
        label: 'test',
        data: [
          {x: 2, y: 1},
          {x: 2.5, y: 2},
          {x: 1.5, y: 3},
          {x: 2, y: 4}
        ]
      }]
    };
    console.log(newVar);
    return newVar;
  }

  protected config: ChartOptions<'scatter'> = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        min: 0,
        max: 4,
        title: {
          text: 'x',
        }
      },
      y: {
        type: 'linear',
        position: 'left',
        min: 0,
        title: {
          text: 'y',
        }
      },
    }
  };

  constructor() {
    Chart.register(chartTrendline);
  }

}
