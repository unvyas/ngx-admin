import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';
import * as Chart from '../../../../../node_modules/chart.js'
import { ApiService } from '../../../api.service.js';
//import * as Chart from 'chart.js'

@Component({
  selector: 'ngx-csco',
  styleUrls: ['./csco.component.scss'],
  templateUrl: './csco.component.html',
})
export class CscoComponent {


  constructor(private menuService: NbMenuService,private apiService : ApiService) {

  }
/*
  goToHome() {
    this.menuService.navigateHome();
  } */

  title = 'angular8chartjs';
  canvas: any;
  ctx: any;
  canvas2 :any 
  ctx2 :any
  ngAfterViewInit() {
    this.canvas = document.getElementById('cs');
    this.ctx = this.canvas.getContext('2d');

    let myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels: [],
          datasets: [{
              label: 'CSCO Stocks',
              data: [],
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

    this.apiService.getApiCall("http://localhost:9200/api/stock/csco")
    .subscribe((data)=>{
      myChart.data.labels = data['labels']
      myChart.data.datasets[0].data = data['data']
      myChart.update()
    });

    

  }

}



