import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';
import * as Chart from '../../../../../node_modules/chart.js'
//import * as Chart from 'chart.js'

@Component({
  selector: 'ngx-csco',
  styleUrls: ['./csco.component.scss'],
  templateUrl: './csco.component.html',
})
export class CscoComponent {

  constructor(private menuService: NbMenuService) {
  }
/*
  goToHome() {
    this.menuService.navigateHome();
  } */

  title = 'angular8chartjs';
  canvas: any;
  ctx: any;
  ngAfterViewInit() {
    this.canvas = document.getElementById('cs');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels: ['30-01-2020', '31-01-2020', '01-02-2020', '02-02-2020', '03-02-2020', '04-02-2020'],
          datasets: [{
              label: 'CSCO Stocks',
              data: [47.24,45.97,46.53,47.62,48.45,48.69],
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        responsive: false,
        display:true
      }
    });
  }



}
